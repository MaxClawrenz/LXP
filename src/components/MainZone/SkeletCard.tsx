import UniversalSkelet from "./UniversalSkelet";
import styles from "../../style.module.css";

function SkeletCard() {
  return (
    <div className={styles.PostCard}>
      <div className={styles.topZone}>
        <div className={styles.cardHeader}>
          <div className={styles.leftHeader}>
            <div className={styles.channelBlock}>
              <UniversalSkelet
                width={"20px"}
                height={"20px"}
                marginTop={""}
                marginBottom={""}
                marginLeft={""}
                marginRight={"11px"}
                paddingTop={""}
                paddingBottom={""}
                paddingLeft={""}
                paddingRight={""}
                borderRadius={"4px"}
              />
              <UniversalSkelet
                width={"105px"}
                height={"17px"}
                marginTop={""}
                marginBottom={""}
                marginLeft={""}
                marginRight={""}
                paddingTop={""}
                paddingBottom={""}
                paddingLeft={""}
                paddingRight={""}
                borderRadius={"4px"}
              />
            </div>
            <UniversalSkelet
              width={"17px"}
              height={"17px"}
              marginTop={""}
              marginBottom={""}
              marginLeft={""}
              marginRight={"50px"}
              paddingTop={""}
              paddingBottom={""}
              paddingLeft={""}
              paddingRight={""}
              borderRadius={"4px"}
            />
            <UniversalSkelet
              width={"70px"}
              height={"17px"}
              marginTop={""}
              marginBottom={""}
              marginLeft={""}
              marginRight={""}
              paddingTop={""}
              paddingBottom={""}
              paddingLeft={""}
              paddingRight={""}
              borderRadius={"4px"}
            />
          </div>
        </div>
        <div className={styles.cardTitle}>
          <UniversalSkelet
            width={"100%"}
            height={"24px"}
            marginTop={""}
            marginBottom={""}
            marginLeft={""}
            marginRight={""}
            paddingTop={""}
            paddingBottom={""}
            paddingLeft={""}
            paddingRight={""}
            borderRadius={"4px"}
          />
        </div>
        <div className={styles.cardDesc}>
          <UniversalSkelet
            width={"100%"}
            height={"19px"}
            marginTop={""}
            marginBottom={"10px"}
            marginLeft={""}
            marginRight={""}
            paddingTop={""}
            paddingBottom={""}
            paddingLeft={""}
            paddingRight={""}
            borderRadius={"4px"}
          />
          <UniversalSkelet
            width={"80%"}
            height={"19px"}
            marginTop={""}
            marginBottom={""}
            marginLeft={""}
            marginRight={""}
            paddingTop={""}
            paddingBottom={""}
            paddingLeft={""}
            paddingRight={""}
            borderRadius={"4px"}
          />
        </div>
      </div>
      <div className={styles.bottomZone}>
        <UniversalSkelet
          width={"15px"}
          height={"15px"}
          marginTop={""}
          marginBottom={""}
          marginLeft={""}
          marginRight={"26px"}
          paddingTop={""}
          paddingBottom={""}
          paddingLeft={""}
          paddingRight={""}
          borderRadius={"4px"}
        />
        <UniversalSkelet
          width={"15px"}
          height={"15px"}
          marginTop={""}
          marginBottom={""}
          marginLeft={""}
          marginRight={"26px"}
          paddingTop={""}
          paddingBottom={""}
          paddingLeft={""}
          paddingRight={""}
          borderRadius={"50%"}
        />
        <UniversalSkelet
          width={"15px"}
          height={"15px"}
          marginTop={""}
          marginBottom={""}
          marginLeft={""}
          marginRight={"26px"}
          paddingTop={""}
          paddingBottom={""}
          paddingLeft={""}
          paddingRight={""}
          borderRadius={"50%"}
        />
      </div>
    </div>
  );
}

export default SkeletCard;
