import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./SideNav.module.css";
import { useRef, useEffect } from "react";
import { useTranslation } from "next-i18next";

interface PageDescription {
  id: string;
  path?: string;
  icon?: string;
}

export default function SideNav() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const container = useRef<HTMLDivElement | null>(null);
  const backgroundTop = useRef<HTMLDivElement | null>(null);
  const backgroundBottom = useRef<HTMLDivElement | null>(null);

  const pages = [
    { id: "home", path: "/" },
    { id: "miRed", path: "/mi-red" },
    { id: "retiro" },
    { id: "finanzas" },
    { id: "membresias" },
    { id: "herramientas" },
    { id: "promociones" },
    { id: "soporte" },
  ].map(fillDefaults);

  function updateBackgroundCover() {
    if (
      !container.current ||
      !backgroundBottom.current ||
      !backgroundTop.current
    )
      return;
    const currentPage = pages.find((page) => page.path == router.pathname);
    if (!currentPage) return;
    const pageLink = document.querySelector(
      "#nav-link-" + currentPage.id
    ) as HTMLAnchorElement;
    backgroundTop.current.style.height = pageLink.offsetTop + "px";
    backgroundBottom.current.style.height =
      container.current.offsetHeight -
      pageLink.offsetTop -
      pageLink.offsetHeight -
      6 +
      "px";
  }

  useEffect(updateBackgroundCover, [
    router,
    container,
    backgroundBottom,
    backgroundTop,
    pages,
  ]);

  useEffect(() => {
    window.addEventListener("resize", updateBackgroundCover);
    return () => window.removeEventListener("resize", updateBackgroundCover);
  }, [router]);

  useEffect(() => {
    if (!container.current) return;
    const resizeObserver = new ResizeObserver(updateBackgroundCover);
    resizeObserver.observe(container.current);
    resizeObserver.observe(document.body);
    return () => resizeObserver.disconnect();
  }, [container, router]);

  return (
    <nav className={styles.container} ref={container}>
      <div className={styles.backgroundTop} ref={backgroundTop} />
      {/* <div className={styles.backgroundBottom} ref={backgroundBottom} />  */}
      <ul className={styles.innerContainer}>
        {pages.map(({ id, path, icon }) => (
          <Link id={"nav-link-" + id} key={id} href={path}>
            <img src={icon} alt="" />
          </Link>
        ))}
        <Link id={"nav-link-salir"} href={"#"}>
          <img src={"/iconos/salir.png"} alt={t("exit") || ""} />
        </Link>
      </ul>
    </nav>
  );
}

function fillDefaults(pageDesc: PageDescription): Required<PageDescription> {
  return {
    path: pageDesc.path || "/" + pageDesc.id,
    icon: pageDesc.icon || "/iconos/" + pageDesc.id + ".png",
    ...pageDesc,
  };
}
