/* eslint-disable @next/next/no-page-custom-font */

import styles from "./goodmorningblues.module.scss";
import Header from "../../components/Header/Header";
import useMedia from "use-media";
import Link from "next/link";
import Head from "next/head";

export default function Workshop() {
  const isMobile = useMedia({ maxWidth: "468px" });

  return <div>hello</div>;
}
