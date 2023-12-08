import styles from "../../../style.module.css";

function HeaderIcon() {
  return (
    <svg
      className={styles.HeaderIcon}
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
    >
      <rect width="45" height="45" rx="6" fill="#0091D5" />
      <path
        d="M31.1242 13.3756C30.2594 13.3758 29.4521 13.8087 28.9733 14.5289L28.9247 14.6037C28.776 14.8265 28.475 14.8867 28.2519 14.738C28.0291 14.5893 27.9689 14.288 28.1177 14.0652L28.1662 13.9911C28.8984 12.8854 29.4695 11.2375 28.1655 10.9962C27.9643 10.959 27.7584 10.9398 27.5498 10.94H24.4459C23.5152 10.939 22.6461 11.4041 22.131 12.1792C21.9823 12.4021 21.6811 12.4622 21.4582 12.3135C21.2354 12.1648 21.1753 11.8635 21.324 11.6407C21.4668 11.4292 21.3941 11.1264 21.1465 11.0643C20.8247 10.9836 20.4936 10.9417 20.1605 10.94H19.7899C19.5221 10.94 19.3049 10.7228 19.3049 10.455C19.3049 10.1871 19.5221 9.96999 19.7899 9.96999H20.1605C20.9486 9.97093 21.7261 10.1545 22.4315 10.5059C22.461 10.5206 22.4916 10.5277 22.5198 10.5107C22.5924 10.4669 22.6664 10.4257 22.7416 10.3871C23.135 10.1852 23.2439 9.59913 22.8371 9.42589C22.1839 9.14775 21.4779 9.00136 20.7599 9H18.3349C15.3899 9.00355 13.0036 11.3899 13 14.3349C13.0028 16.7445 14.9554 18.697 17.3649 18.6999H23.4408C24.5865 18.7029 25.6347 18.0548 26.1433 17.0282C26.2629 16.7883 26.5545 16.691 26.7941 16.8108C27.034 16.9306 27.1311 17.2219 27.0115 17.4616C26.6664 18.1473 26.8635 19.2681 27.4053 19.8119C27.5313 19.9336 27.582 20.1141 27.5375 20.2837C27.4932 20.4532 27.3608 20.5856 27.191 20.6299C27.0215 20.6744 26.8412 20.6237 26.7195 20.4977C26.1909 19.9663 25.4722 19.6682 24.7227 19.6698C24.1412 19.6698 23.6476 20.1742 23.9483 20.6719C24.2881 21.234 24.9051 21.6098 25.6098 21.6098H26.5928C26.8419 21.6098 27.0506 21.7985 27.0754 22.0463C27.1242 22.5627 27.4032 23.0297 27.8349 23.3175C28.2571 23.5993 28.7999 23.6258 29.2475 23.3864C29.6951 23.1472 29.9745 22.6809 29.9747 22.1734V21.8902C29.9747 21.6974 30.0891 21.5229 30.2658 21.4459C31.3539 20.9709 30.2631 19.8037 29.5323 20.7393C29.4895 20.7941 29.4486 20.8507 29.4097 20.9091C29.261 21.1319 28.96 21.1921 28.7369 21.0434C28.5141 20.8946 28.4539 20.5934 28.6026 20.3706C28.7496 20.15 28.9189 19.9465 29.1072 19.763C29.4883 19.3917 29.5429 18.6859 29.2473 18.2435L29.0843 18.001C28.9356 17.7782 28.9958 17.477 29.2186 17.3282C29.4414 17.1798 29.7427 17.2397 29.8914 17.4627L30.0543 17.7052C30.4685 18.3276 31.1671 18.701 31.9147 18.6999C32.7182 18.6999 33.3697 18.0484 33.3697 17.2449V15.7899C33.3657 14.5225 32.3879 13.4713 31.1242 13.3756ZM19.5474 15.7612L19.7103 16.0037C19.859 16.2266 19.7989 16.5278 19.5761 16.6765C19.3532 16.825 19.052 16.7651 18.9033 16.542L18.7403 16.2995C18.3262 15.6772 17.6276 15.3037 16.8799 15.3049C15.8015 15.3066 14.8609 14.5727 14.6004 13.526L14.4685 12.9979C14.4251 12.8293 14.4751 12.6502 14.6001 12.529C14.7249 12.4075 14.9052 12.3623 15.0723 12.4106C15.2398 12.4587 15.3684 12.5929 15.4093 12.762L15.5419 13.2908C15.6945 13.9051 16.2467 14.3361 16.8799 14.3349C17.6268 14.3354 18.3245 13.9619 18.7384 13.3403L18.9014 13.0978C19.0501 12.8747 19.3513 12.8148 19.5742 12.9633C19.797 13.112 19.8572 13.4132 19.7084 13.6361L19.5455 13.8786C19.1973 14.4018 19.1989 15.2383 19.5474 15.7612ZM26.0948 14.3349C25.4346 14.3344 24.8482 14.7569 24.6398 15.3835L24.6152 15.4581C24.5496 15.6573 24.3639 15.7918 24.1544 15.7918C23.9448 15.7918 23.7591 15.6573 23.6935 15.4581L23.6698 15.384C23.4617 14.7572 22.8753 14.3342 22.2149 14.3349C21.947 14.3349 21.7299 14.1178 21.7299 13.8499C21.7299 13.5821 21.947 13.3649 22.2149 13.3649C23.3605 13.3646 24.9492 13.3646 26.0948 13.3649C26.3626 13.3649 26.5798 13.5821 26.5798 13.8499C26.5798 14.1178 26.3626 14.3349 26.0948 14.3349Z"
        fill="white"
      />
      <path
        d="M20.2025 28.1109C19.6675 29.2678 21.1007 30.3284 22.0507 29.4785L23.0998 28.5398C23.5349 28.1506 23.2595 27.4298 22.6757 27.4298C22.4872 27.4296 22.316 27.3206 22.2364 27.1499C22.1568 26.9791 22.1831 26.7779 22.3041 26.6334L25.6418 22.6483C25.6645 22.6212 25.6452 22.5799 25.6098 22.5799C24.1607 22.5784 22.9596 21.5192 22.7369 20.1326C22.6962 19.8792 22.4919 19.6699 22.2353 19.6699C22.0664 19.6699 21.9108 19.7615 21.8288 19.9091L18.489 25.9207C18.3546 26.1626 18.5295 26.4598 18.8062 26.4598C18.938 26.4598 19.0595 26.3884 19.1235 26.2732L21.0704 22.7683C21.2005 22.5341 21.4958 22.4498 21.73 22.5799C21.964 22.7101 22.0484 23.0052 21.9183 23.2393L20.1673 26.3917C20.1503 26.4223 20.1724 26.4598 20.2074 26.4598C20.3729 26.4598 20.5268 26.5441 20.6159 26.6834C20.7052 26.8226 20.7172 26.9979 20.6479 27.148L20.2025 28.1109Z"
        fill="white"
      />
      <path
        d="M14.455 27.9146C14.2209 27.7845 14.1366 27.4892 14.2667 27.2551L14.3347 27.1329C14.4648 26.8988 14.7601 26.8145 14.9942 26.9446C15.2283 27.0747 15.3126 27.37 15.1824 27.6041L15.1145 27.7264C14.9844 27.9605 14.6891 28.0447 14.455 27.9146Z"
        fill="white"
      />
      <path
        d="M15.8024 25.4894C15.5683 25.3593 15.4839 25.0641 15.614 24.8299L15.7355 24.6111C15.8656 24.3769 16.1609 24.2925 16.3951 24.4227C16.6293 24.5528 16.7136 24.8481 16.5835 25.0822L16.4619 25.301C16.3318 25.5351 16.0365 25.6194 15.8024 25.4894Z"
        fill="white"
      />
      <path
        d="M17.3649 22.6768C17.1308 22.5468 17.0464 22.2516 17.1764 22.0174L17.6753 21.1193C17.8053 20.8851 18.1006 20.8008 18.3348 20.9308C18.5689 21.0609 18.6533 21.3562 18.5232 21.5903L18.0243 22.4884C17.8942 22.7225 17.599 22.8069 17.3649 22.6768Z"
        fill="white"
      />
      <path
        d="M29.4897 27.9146H27.5498C27.2819 27.9146 27.0648 28.1317 27.0648 28.3995V28.5651C27.0648 28.7415 27.2078 28.8845 27.3842 28.8845C27.6774 28.8845 27.8157 29.2465 27.5971 29.442L27.3358 29.6758C27.1491 29.8428 27.1332 30.1294 27.3002 30.3161L27.3213 30.3396C27.5 30.5392 27.8065 30.5562 28.0061 30.3776L29.8132 28.7609C29.9629 28.6266 30.0145 28.4142 29.9427 28.2264C29.871 28.0386 29.6908 27.9146 29.4897 27.9146Z"
        fill="white"
      />
      <path
        d="M24.0698 33.2496C23.8912 33.05 23.9081 32.7434 24.1077 32.5648L24.9251 31.8331C25.1246 31.6545 25.4311 31.6715 25.6098 31.871C25.7885 32.0705 25.7715 32.3771 25.572 32.5558L24.7547 33.2875C24.5551 33.4662 24.2485 33.4492 24.0698 33.2496Z"
        fill="white"
      />
      <path
        d="M20.2754 36.6451C20.0967 36.4455 20.1137 36.1389 20.3133 35.9602L21.7583 34.6667C21.9579 34.4881 22.2645 34.5051 22.4431 34.7046C22.6218 34.9042 22.6048 35.2108 22.4052 35.3895L20.9602 36.683C20.7606 36.8616 20.454 36.8447 20.2754 36.6451Z"
        fill="white"
      />
    </svg>
  );
}

export default HeaderIcon;