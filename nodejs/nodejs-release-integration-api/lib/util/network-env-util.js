const { networkInterfaces } = require('os');
const logger = require("../logger");

/**
networkInterfaces  {
  WLAN: [
    {
      address: '2409:8a1e:9893:cf10:e98e:d20e:31a9:2e27',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '18:cf:5e:01:c6:7c',
      internal: false,
      cidr: '2409:8a1e:9893:cf10:e98e:d20e:31a9:2e27/64',
      scopeid: 0
    },
    {
      address: '2409:8a1e:9893:cf10:69a2:1c75:762:c262',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '18:cf:5e:01:c6:7c',
      internal: false,
      cidr: '2409:8a1e:9893:cf10:69a2:1c75:762:c262/128',
      scopeid: 0
    },
    {
      address: 'fe80::333d:a289:e401:43a',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '18:cf:5e:01:c6:7c',
      internal: false,
      cidr: 'fe80::333d:a289:e401:43a/64',
      scopeid: 18
    },
    {
      address: '192.168.1.11',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: '18:cf:5e:01:c6:7c',
      internal: false,
      cidr: '192.168.1.11/24'
    }
  ],
  'Loopback Pseudo-Interface 1': [
    {
      address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '::1/128',
      scopeid: 0
    },
    {
      address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '127.0.0.1/8'
    }
  ]
}

{ WLAN: [ '192.168.1.11' ] }
 */
function getLocalIp() {
  const nets = networkInterfaces();
  console.log(`networkInterfaces `, nets);
  const results = {};  // or Object.create(null); // return [Object:null prototype]
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
      if (net.family === 'IPv4' && !net.internal) {
        if (!results[name]) {
          results[name] = [];
        }
        results[name].push(net.address);
      }
    }
    console.log(results);
    // TODO: need to adapt different host
    // const localIp = results["Ethernet0"][0];
    const localIp = results["WLAN"][0];
    logger.info(`local ip: ${localIp}`);
    return localIp;
  }
}


module.exports = {
  getLocalIp
};
