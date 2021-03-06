import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Profile.module.css";
import firebase from "../config/firebase";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [triggerpermission, setTriggerpermission] = useState(3);
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
          <div className={styles.containerwait}>
            <main className={styles.mainwait}>
              <h1 className={styles.titlewait}>
                Please{" "}
                <Link href="https://liff.line.me/1656198560-ZDDm059o">
                  <a>Register</a>
                </Link>
              </h1>
            </main>
          </div>
        </>
      ) : (
        <>
          {triggerpermission == 1 ? (
            <>
              <div className={styles.container}>
                <Head>
                  <title>MyProfile</title>
                  <meta
                    name="description"
                    content="Generated by create next app"
                  />
                  <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className={styles.header}>
                  <h4 className={styles.headertitle}>PROFILE</h4>
                </div>
                <div className={styles.leaderboard}>
                  <img src="/profilecover.jpg"></img>
                </div>
                <main className={styles.main}>
                  <div className={styles.section1}>
                    <div className={styles.row1}>
                      <div className={styles.col1}>
                        <div className={styles.header}>
                          <h4>PC</h4>
                        </div>
                        <div className={styles.content}>
                          <div className={styles.leftcontent}>
                            <h2 className={styles.leftcontent1}>19</h2>
                            <h3 className={styles.leftcontent2}>Ranking</h3>
                          </div>
                          <div className={styles.rightcontent}>
                            <h2 className={styles.rightcontent1}>100,000</h2>
                            <h3 className={styles.rightcontent2}>Score</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.row2}>
                      <div className={styles.row2_1}>
                        <h4>Coins</h4>
                      </div>
                      <div className={styles.row2_2}>
                        <div className={styles.imgwrap}>
                          <img src="/coin.png"></img>
                        </div>
                        <div className={styles.goldwrap}>
                          <h1>190</h1>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.section2}>
                    <div className={styles.header}>
                      <h3>Reward</h3>
                    </div>
                    <div className={styles.rewardlist}>
                      <div className={styles.reward}>
                        <h4>Philips Air Flyer HD9721</h4>
                      </div>
                      <div className={styles.reward}>
                        <h4>Gift Voucher</h4>
                      </div>
                      <div className={styles.reward}>
                        <h4>Bicycle</h4>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
}
