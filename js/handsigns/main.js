// import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

const aSign = new GestureDescription('A');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
aSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);
// aSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
aSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
aSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);
// aSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Middle
aSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
aSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);
// aSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.70);

//Ring
aSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
aSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
aSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
aSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

// import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

 const bSign = new GestureDescription('B');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "No Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
bSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
bSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);
bSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
bSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
bSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
bSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
bSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
bSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
bSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);


//Pinky
bSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
bSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);


// import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

 const cSign = new GestureDescription('C');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Ring",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Pinky",
//       "Half Curl",
//       "Diagonal Up Right"
//     ]
//   ]

//Thumb
cSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
cSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
cSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
cSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
cSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
cSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.70);

//Ring
cSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1);
cSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.70);

//Pinky
cSign.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1);
cSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.70);

// import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

 const dSign = new GestureDescription('D');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
dSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
dSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Index
dSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
dSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
dSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
dSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
dSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
dSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
dSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
dSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

// import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

 const eSign = new GestureDescription('E');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
eSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
eSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Index
eSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
eSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
eSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
eSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
eSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
eSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
eSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
eSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

// import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

 const fSign = new GestureDescription('F');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "No Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
fSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
fSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
fSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
fSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
fSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
fSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
fSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
fSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
fSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
fSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

// import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

 const gSign = new GestureDescription('G');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Half Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Horizontal Right"
//     ]
//   ]

//Thumb
gSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
gSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
gSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
gSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

//Middle
gSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
gSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.70);

//Ring
gSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
gSign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.70);

//Pinky
gSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
gSign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.70);

// import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

 const hSign = new GestureDescription('H');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Middle",
//       "No Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Horizontal Right"
//     ]
//   ]

//Thumb
hSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
hSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

//Index
hSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
hSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

//Middle
hSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
hSign.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.70);

//Ring
hSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
hSign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.70);

//Pinky
hSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
hSign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.70);

// import {aSign} from './Asign';
// import {bSign} from './Bsign';
// import {cSign} from './Csign';
// import {dSign} from './Dsign';
// import {eSign} from './Esign';
// import {fSign} from './Fsign';
// import {gSign} from './Gsign';
// import {hSign} from './Hsign';
// import {iSign} from './Isign';
// import {jSign} from './Jsign';
// import {kSign} from './Ksign';
// import {lSign} from './Lsign';
// import {mSign} from './Msign';
// import {nSign} from './Nsign';
// import {oSign} from './Osign';
// import {pSign} from './Psign';
// import {qSign} from './Qsign';
// import {rSign} from './Rsign';
// import {sSign} from './Ssign';
// import {tSign} from './Tsign';
// import {uSign} from './Usign';
// import {vSign} from './Vsign';
// import {wSign} from './Wsign';
// import {xSign} from './Xsign';
// import {ySign} from './Ysign';
// import {zSign} from './Zsign';



// const Handsigns = {
//     aSign,
//     bSign,
//     cSign,
//     dSign,
//     eSign,
//     fSign,
//     gSign,
//     hSign,
//     iSign,
//     jSign,
//     kSign,
//     lSign,
//     mSign,
//     nSign,
//     oSign,
//     pSign,
//     qSign,
//     rSign,
//     sSign,
//     tSign,
//     uSign,
//     vSign,
//     wSign,
//     xSign,
//     ySign,
//     zSign,
// }


// export default Handsigns;// import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

 const iSign = new GestureDescription('I');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "No Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
iSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
iSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
iSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
iSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
iSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
iSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
iSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
iSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
iSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
iSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

// import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

 const jSign = new GestureDescription('J');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Pinky",
//       "No Curl",
//       "Horizontal Right"
//     ]
//   ]

//Thumb
jSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
jSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
jSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
jSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
jSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
jSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.70);

//Ring
jSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
jSign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.70);

//Pinky
jSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
jSign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.70);

// import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

 const kSign = new GestureDescription('K');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
kSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
kSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
kSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
kSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
kSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
kSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
kSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
kSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
kSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
kSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

// import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

 const lSign = new GestureDescription('L');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
lSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
lSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
lSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
lSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
lSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
lSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
lSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
lSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
lSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
lSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);



 const mSign = new GestureDescription('M');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
mSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
mSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
mSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
mSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
mSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
mSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
mSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
mSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
mSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
mSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

// import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

 const nSign = new GestureDescription('N');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
nSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
nSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
nSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
nSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
nSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
nSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
nSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
nSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
nSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
nSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

// import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

 const oSign = new GestureDescription('O');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Ring",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Pinky",
//       "Half Curl",
//       "Diagonal Up Right"
//     ]
//   ]

//Thumb
oSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
oSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
oSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
oSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
oSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
oSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.70);

//Ring
oSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
oSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.70);

//Pinky
oSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
oSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.70);
// import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

 const pSign = new GestureDescription('P');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Diagonal Down Right"
//     ]
//   ]

//Thumb
pSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
pSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

//Index
pSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
pSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

//Middle
pSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
pSign.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 0.70);

//Ring
pSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
pSign.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 0.70);

//Pinky
pSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
pSign.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 0.70);

// import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

 const qSign = new GestureDescription('Q');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Vertical Down"
//     ],
//     [
//       "Index",
//       "Half Curl",
//       "Vertical Down"
//     ],
//     [
//       "Middle",
//       "Half Curl",
//       "Vertical Down"
//     ],
//     [
//       "Ring",
//       "Half Curl",
//       "Vertical Down"
//     ],
//     [
//       "Pinky",
//       "Half Curl",
//       "Diagonal Down Left"
//     ]
//   ]

//Thumb
qSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
qSign.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.70);

//Index
qSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
qSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

//Middle
qSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
qSign.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.70);

//Ring
qSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
qSign.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 0.70);

//Pinky
qSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
qSign.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 0.70);

// import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

 const rSign = new GestureDescription('R');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
rSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
rSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
rSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
rSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
rSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
rSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
rSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
rSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
rSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
rSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

// import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

 const sSign = new GestureDescription('S');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
sSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
sSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Index
sSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
sSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
sSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
sSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
sSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
sSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
sSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
sSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

// import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

 const tSign = new GestureDescription('T');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
tSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
tSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Index
tSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
tSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
tSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
tSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
tSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
tSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
tSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
tSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

// import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

 const uSign = new GestureDescription('U');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
uSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
uSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
uSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
uSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
uSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
uSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
uSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
uSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
uSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
uSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

// import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

 const vSign = new GestureDescription('V');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
vSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
vSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
vSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
vSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
vSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
vSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
vSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
vSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
vSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
vSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

// import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

 const wSign = new GestureDescription('W');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "No Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
wSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
wSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
wSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
wSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
wSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
wSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
wSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
wSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.70);

//Pinky
wSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
wSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

// import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

 const xSign = new GestureDescription('X');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
xSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
xSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Index
xSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
xSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
xSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
xSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
xSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
xSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
xSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
xSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

// import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

 const ySign = new GestureDescription('Y');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "No Curl",
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
ySign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ySign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
ySign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
ySign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
ySign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
ySign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
ySign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
ySign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
ySign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
ySign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

// import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

 const zSign = new GestureDescription('Z');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Horizontal Left"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Horizontal Left"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Horizontal Left"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Horizontal Left"
//     ]
//   ]

//Thumb
zSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
zSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.70);

//Index
zSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
zSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Middle
zSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
zSign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.70);

//Ring
zSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
zSign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.70);

//Pinky
zSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
zSign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.70);