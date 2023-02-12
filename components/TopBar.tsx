import styles from "./TopBar.module.css";
import TeamLink from "@/components/TeamLink";
import { useTranslation } from "next-i18next";
import { Web3Button } from "@web3modal/react";
import { useContractRead, useAccount } from "wagmi";


import { RootState } from "@/data/store";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "@/data/data";

import minerContract from "../abis/minerContract.json";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

export default function TopBar() {
  const { t } = useTranslation("common");
  const Data = useSelector((state: RootState) => state.data);
 

  const dispatch = useDispatch();

  const { address: Address, isConnecting, isDisconnected } = useAccount();
  //console.log("ADDRESS", Address);



  type DataState = [{
    id: number;
    GHZ: number;
    claimed: Number;
    initialDate: Date;
    claimDate: Date;
    status: Boolean;
  }]


  const { data
    , isError
    , isLoading } = useContractRead({
      address: "0x4E3e9000D742EE4017f6DcceFe5D593C7E15cA64",
      abi: minerContract,
      functionName: "getValues",
      //args: address
      args: [Address],
      enabled: false,
    });
  //console.log("data", data);
  console.log("isError", isError);
  console.log("isLoading", isLoading);
  if (data) {
    //console.log("data", data);
    const val: any = [];
    (data as DataState).map((value) => {
      val.push({
        id: parseInt(value.id.toString()),
        GHZ: parseInt(ethers.utils.formatEther(value.GHZ.toString())),
        claimed: parseInt(ethers.utils.formatEther(value.claimed.toString())),
        initialDate: parseInt(value.initialDate.toString()),
        claimDate: parseInt(value.claimDate.toString()),
        status: value.status,
      })
    })
    if (!Data.dataLoaded) { dispatch(setData(val)); }
  }

  







  return (
    <div className={styles.topBar}>
      <img className={styles.nameLogo} src="/logo.png" alt="" />
      <div className={styles.TopBarText}>
        <p>Enlace de referidos</p>
        <div className={styles.TopBarBottom}>
          <TeamLink
            label={t("Izquierdo").split(" ").join("\n")}
            url="https://OrbeStudios.com/team1"
            className="TeamLink_labelTem1__XDxKj"
            img="personMas.svg"
          />
          <TeamLink
            label={t("Derecho").split(" ").join("\n")}
            url="https://OrbeStudios.com/team2"
            className="TeamLink_labelTem2__ube_H"
            img="personMas2.svg"
          />
        </div>
      </div>
      <div className={styles.topTime}>

        <p>Horario de la Génesis</p>
        <div className={styles.topTimeProfile}>
          <div className={styles.topTimeHours}>
            <img src="/iconos/07_22.png" alt="" />
            <img src="/iconos/06_01_23.png" alt="" />
          </div>

          {/* <button className={styles.iconBtn}>
            <img src="/iconos/perfil.png" alt={t("yourProfile") || ""} />
          </button> */}
        </div>
      </div>
      <Web3Button />
      <div className={styles.topBarGroup}>

        {/*<button className={styles.iconBtn}>
          <img src="/iconos/notificacion.png" alt={t("notifications") || ""} />
        </button>*/}
      </div>
    </div>
  );
}
