import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Podcast.module.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import firebase from "../config/firebase";
import Link from 'next/link'
import React, { useState, useEffect } from "react";
export default function Podcast() {
  const [triggerpermission, setTriggerpermission] = useState(0);
  useEffect(() => {
    firebase
      .firestore()
      .collection("triggerID")
      .doc("TriggerPermission")
      .onSnapshot((documentSnapshot) => {
        // console.log("DOCSNAP " + JSON.stringify(documentSnapshot));
        console.log("DOCSNAP " + JSON.stringify(documentSnapshot.data()));
        console.log("DOCSNAP " + documentSnapshot.data().permissionID);
        let permissionID = documentSnapshot.data().permissionID;
        setTriggerpermission(permissionID);
      });
  }, []);
  return (
    <>
      {triggerpermission == 0 ? (
        <>
          {" "}
          <div className={styles.containerwait}>
            <main className={styles.main}>
              <h1 className={styles.titlewait}>
                Please {/* <Link href="/register"> */}
                <a>Register</a>
                {/* </Link> */}
              </h1>
            </main>
          </div>
        </>
      ) : (
        <>
          <div className={styles.container}>
            <Head>
              <title>Podcast</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.header}>
              <h4 className={styles.headertitle}>PODCAST</h4>
            </div>
            <div className={styles.musicplayerwrap}>
              <div className={styles.imgwrapz}>
                {/* <Image
                  loading="eager"
                  src="/musiccover1.jpg"
                  alt="Picture of the author"
                  width={300}
                  height={300}
                /> */}
                <img src="/musiccover1.jpg"></img>
              </div>
              <div className={styles.titlewrap}>
                <h2>Podcast EP.1 - ABCDEFG</h2>
                <h3>Jariya Manoz</h3>
              </div>
              <div className={styles.playerwrap}>
                <AudioPlayer
                autoPlay
                  customVolumeControls={[]}
                  src="https://firebasestorage.googleapis.com/v0/b/alliance-621ee.appspot.com/o/tempfile%2FVGh1IEp1bCAwOCAyMDIxIDE1OjIzOjI3IEdNVCswNzAwIChJbmRvY2hpbmEgVGltZSk%3D.mp3?alt=media"
                  onPlay={(e) => console.log("onPlay")}
                  // other props here
                />
              </div>
              <div className={styles.playerlist}>
                <div className={styles.playerlisthead}>
                  <div className={styles.imgwrap}>
                    <Image
                      priority={true}
                      src="/musicicon.png"
                      alt="Picture of the author"
                      width={17}
                      height={13}
                    />
                  </div>

                  <h3>Music list</h3>
                </div>
                <div className={styles.playerlistrows}>
                  <div className={styles.playerlistrow}>
                    <div className={styles.playerlistrowleftactive}>
                      <h4 className={styles.playerlistrowtitle}>
                        Podcast EP.1 - ABCDEFG
                      </h4>
                      <p className={styles.playerlistrowtitle}>Jariya Manoz</p>
                    </div>
                    <div className={styles.playerlistrowrightactive}>
                      <p>Playing</p>
                    </div>
                  </div>

                  <div className={styles.playerlistrow}>
                    <div className={styles.playerlistrowleft}>
                      <h4 className={styles.playerlistrowtitle}>
                        Podcast EP.2 - Coming Soon
                      </h4>
                      <p className={styles.playerlistrowtitle}>Jariya Manoz</p>
                    </div>
                    <div className={styles.playerlistrowright}>
                      <p>--:--</p>
                    </div>
                  </div>

                  <div className={styles.playerlistrow}>
                    <div className={styles.playerlistrowleft}>
                      <h4 className={styles.playerlistrowtitle}>
                        Podcast EP.3 - Coming Soon
                      </h4>
                      <p className={styles.playerlistrowtitle}>Jariya Manoz</p>
                    </div>
                    <div className={styles.playerlistrowright}>
                      <p>--:--</p>
                    </div>
                  </div>

                  <div className={styles.playerlistrow}>
                    <div className={styles.playerlistrowleft}>
                      <h4 className={styles.playerlistrowtitle}>
                        Podcast EP.4 - Coming Soon
                      </h4>
                      <p className={styles.playerlistrowtitle}>Jariya Manoz</p>
                    </div>
                    <div className={styles.playerlistrowright}>
                      <p>--:--</p>
                    </div>
                  </div>

                  <div className={styles.playerlistrow}>
                    <div className={styles.playerlistrowleft}>
                      <h4 className={styles.playerlistrowtitle}>
                        Podcast EP.5 - Coming Soon
                      </h4>
                      <p className={styles.playerlistrowtitle}>Jariya Manoz</p>
                    </div>
                    <div className={styles.playerlistrowright}>
                      <p>--:--</p>
                    </div>
                  </div>

                  <div className={styles.playerlistrow}>
                    <div className={styles.playerlistrowleft}>
                      <h4 className={styles.playerlistrowtitle}>
                        Podcast EP.6 - Coming Soon
                      </h4>
                      <p className={styles.playerlistrowtitle}>Jariya Manoz</p>
                    </div>
                    <div className={styles.playerlistrowright}>
                      <p>--:--</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
