/**
 * Get the user IP throught the webkitRTCPeerConnection
 * @param onNewIP {Function} listener function to expose the IP locally
 * @return undefined
 */
const getIpInClient = (onNewIP: (ip: any) => any) => {
  //  onNewIp - your listener function for new IPs
  // compatibility for firefox and chrome
  const myPeerConnection =
    (window as any).RTCPeerConnection ||
    (window as any).mozRTCPeerConnection ||
    (window as any).webkitRTCPeerConnection;
  const peerConnection = new myPeerConnection({
    iceServers: [],
  });
  // tslint:disable-next-line:no-empty
  const noop = () => {};
  const localIPs: any = undefined;
  const ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;

  function iterateIP(ip: any) {
    if (!localIPs[ip]) {
      onNewIP(ip);
    }
    localIPs[ip] = true;
  }

  // create a bogus data channel
  peerConnection.createDataChannel('');

  // create offer and set local description
  peerConnection.createOffer((sdp: any) => {
    sdp.sdp.split('\n').forEach((line: any) => {
      if (line.indexOf('candidate') < 0) {
        return;
      }
      line.match(ipRegex).forEach(iterateIP);
    });

    peerConnection.setLocalDescription(sdp, noop, noop);
  }, noop);

  // listen for candidate events
  peerConnection.onicecandidate = (ice: any) => {
    if (
      !ice ||
      !ice.candidate ||
      !ice.candidate.candidate ||
      !ice.candidate.candidate.match(ipRegex)
    ) {
      return;
    }
    ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
  };
};

export default getIpInClient;
