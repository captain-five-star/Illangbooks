import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./framer-inline-style.css";
import "./framer.css";
import Image from "next/image";
import SvgTemplates from "./components/svg-templates";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "일랑북스",
    description: "일랑북스입니다",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <head>
                <meta charSet="utf-8" />
                {/* <script>
                    try {
                    if (localStorage.get("__framer_force_showing_editorbar_since")) {
                        const n = document.createElement("link");
                    n.rel = "modulepreload";
                    n.href = "https://framer.com/edit/init.mjs";
                    document.head.appendChild(n)
                    }
                } catch (e) { }
                </script> */}
                <meta name="viewport" content="width=device-width" />
                <meta name="generator" content="Framer 6bbae76" />
                <title>My Framer Site</title>
                <meta name="description" content="Made with Framer" />
                <meta name="framer-search-index" content="https://framerusercontent.com/sites/5PEV6T37b7TiNOethVqtHp/searchIndex-66fZg4EPtQAW.json" />
                <meta name="framer-search-index-fallback" content="https://framerusercontent.com/sites/5PEV6T37b7TiNOethVqtHp/searchIndex-Zfu1xWAW63Er.json" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="My Framer Site" />
                <meta property="og:description" content="Made with Framer" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="My Framer Site" />
                <meta name="twitter:description" content="Made with Framer" />
                <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
                <meta name="robots" content="max-image-preview:large" />
                <link rel="canonical" href="https://expansive-background-233449.framer.app/" />
                <meta property="og:url" content="https://expansive-background-233449.framer.app/" />
            </head>
            <body>
                {/* <script async src="https://events.framer.com/script?v=2" data-fid="bb9229f8597073bd554ad9b49e3b2304cbcca7422057248cf5b20c43c552a751" data-no-nt></script> */}
                <div id="main" data-framer-hydrate-v2="{&quot;routeId&quot;:&quot;augiA20Il&quot;,&quot;localeId&quot;:&quot;default&quot;,&quot;breakpoints&quot;:[{&quot;hash&quot;:&quot;1vk2m8p&quot;,&quot;mediaQuery&quot;:&quot;(min-width: 1200px)&quot;},{&quot;hash&quot;:&quot;xpwx9r&quot;,&quot;mediaQuery&quot;:&quot;(min-width: 810px) and (max-width: 1199.98px)&quot;},{&quot;hash&quot;:&quot;72rtr7&quot;,&quot;mediaQuery&quot;:&quot;(max-width: 809.98px)&quot;}]}" data-framer-ssr-released-at="2025-12-10T16:53:31.331Z" data-framer-page-optimized-at="2025-12-11T08:31:09.634Z" data-framer-generated-page>
                    <div data-framer-root className="framer-3F5nR framer-idunJ framer-72rtr7">
                        <div className="framer-va6j0a" data-framer-name="섹션1">
                            <div className="framer-xfdacz">
                                <div className="framer-1bt0651">
                                    <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                                        <div className="framer-crvmsn" data-framer-component-type="RichTextContainer">
                                            <p className="framer-text">About</p>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                                        <div className="framer-crvmsn" data-framer-component-type="RichTextContainer">
                                            <p className="framer-text">About</p>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                                        <div className="framer-crvmsn" data-framer-component-type="RichTextContainer">
                                            <p className="framer-text">About</p>
                                        </div>
                                    </div>
                                    <div className="framer-1u8zq0h">
                                        <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                                            <div className="framer-1f5w0vy" data-framer-component-type="RichTextContainer">
                                                <p className="framer-text">출판기획사 일랑북스입니다.</p>
                                                <p className="framer-text">일랑북스의 목표는</p>
                                                <p className="framer-text">고객사와 작가님이 만족할 수 있는</p>
                                                <p className="framer-text">책을 만드는 것입니다.</p>
                                                <p className="framer-text">일랑북스와 함께하세요!</p>
                                            </div>
                                        </div>
                                        <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                                            <div className="framer-1f5w0vy" data-framer-component-type="RichTextContainer">
                                                <p className="framer-text">출판기획사 일랑북스입니다. 일랑북스의 목표는</p>
                                                <p className="framer-text">
                                                    고객사와 작가님이 만족할 수 있는 <span className="framer-text">책을 만드는 것입니다.</span>
                                                </p>
                                                <p className="framer-text">일랑북스와 함께하세요!</p>
                                            </div>
                                        </div>
                                        <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                                            <div className="framer-1f5w0vy" data-framer-component-type="RichTextContainer">
                                                <p className="framer-text">출판기획사 일랑북스입니다.</p>
                                                <p className="framer-text">일랑북스의 목표는</p>
                                                <p className="framer-text">고객사와 작가님이 만족할 수 있는</p>
                                                <p className="framer-text">책을 만드는 것입니다.</p>
                                                <p className="framer-text">일랑북스와 함께하세요!</p>
                                            </div>
                                        </div>
                                        <div className="framer-g5x045">
                                            <div className="framer-1w0rapb">
                                                <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                                                    <div className="framer-kpo24b" data-framer-component-type="RichTextContainer">
                                                        <p className="framer-text">외주편집</p>
                                                    </div>
                                                </div>
                                                <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                                                    <div className="framer-kpo24b" data-framer-component-type="RichTextContainer">
                                                        <p className="framer-text">외주편집</p>
                                                    </div>
                                                </div>
                                                <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                                                    <div className="framer-kpo24b" data-framer-component-type="RichTextContainer">
                                                        <p className="framer-text">외주편집</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="framer-njo5ub">
                                                <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                                                    <div className="framer-i3gpxu" data-framer-component-type="RichTextContainer">
                                                        <p className="framer-text">출간대행</p>
                                                    </div>
                                                </div>
                                                <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                                                    <div className="framer-i3gpxu" data-framer-component-type="RichTextContainer">
                                                        <p className="framer-text">출간대행</p>
                                                    </div>
                                                </div>
                                                <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                                                    <div className="framer-i3gpxu" data-framer-component-type="RichTextContainer">
                                                        <p className="framer-text">출간대행</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="framer-1jmwk5h">
                                                <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                                                    <div className="framer-1pd62ox" data-framer-component-type="RichTextContainer">
                                                        <p className="framer-text">자비출판</p>
                                                    </div>
                                                </div>
                                                <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                                                    <div className="framer-1pd62ox" data-framer-component-type="RichTextContainer">
                                                        <p className="framer-text">자비출판</p>
                                                    </div>
                                                </div>
                                                <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                                                    <div className="framer-1pd62ox" data-framer-component-type="RichTextContainer">
                                                        <p className="framer-text">자비출판</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="framer-1c25ncm framer-lux5qc" href="./회사소개">
                                    <div className="framer-igrsqc">
                                        <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                                            <div className="framer-w8ofc0" data-framer-component-type="RichTextContainer">
                                                <p className="framer-text">회사 소개 바로가기</p>
                                            </div>
                                        </div>
                                        <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                                            <div className="framer-w8ofc0" data-framer-component-type="RichTextContainer">
                                                <p className="framer-text">회사 소개 바로가기</p>
                                            </div>
                                        </div>
                                        <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                                            <div className="framer-w8ofc0" data-framer-component-type="RichTextContainer">
                                                <p className="framer-text">회사 소개 바로가기</p>
                                            </div>
                                        </div>
                                        <div className="framer-2u0x4t">
                                            <div data-framer-component-type="SVG" className="framer-g90923" aria-hidden="true"></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="ssr-variant hidden-1vk2m8p">
                                <div className="framer-1dzt9ka">
                                    <div data-framer-background-image-wrapper="true">
                                        <Image decoding="async" width="1154" height="1210" src="https://framerusercontent.com/images/CMmvqOT0GuDIpo04T2Q4PjuQQ.png?width=1154&amp;height=1210" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                                <div className="framer-1dzt9ka">
                                    <div data-framer-background-image-wrapper="true">
                                        <Image decoding="async" width="1154" height="1210" src="https://framerusercontent.com/images/CMmvqOT0GuDIpo04T2Q4PjuQQ.png?width=1154&amp;height=1210" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="framer-1w5b1ly" data-framer-name="섹션2: 서비스">
                            <div className="framer-1g5rh3z">
                                <div className="framer-1fr8tv6">
                                    <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                                        <div className="framer-1g17qil" data-framer-component-type="RichTextContainer">
                                            <p className="framer-text">Service</p>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                                        <div className="framer-1g17qil" data-framer-component-type="RichTextContainer">
                                            <p className="framer-text">Service</p>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                                        <div className="framer-1g17qil" data-framer-component-type="RichTextContainer">
                                            <p className="framer-text">Service</p>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                                        <div className="framer-1tkkgtb" data-framer-component-type="RichTextContainer">
                                            <p className="framer-text">이런 분들께 일랑북스의 서비스를 추천합니다!</p>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                                        <div className="framer-1tkkgtb" data-framer-component-type="RichTextContainer">
                                            <p className="framer-text">이런 분들께 일랑북스의 </p>
                                            <p className="framer-text">서비스를 추천합니다!</p>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                                        <div className="framer-1tkkgtb" data-framer-component-type="RichTextContainer">
                                            <p className="framer-text">이런 분들께 일랑북스의 </p>
                                            <p className="framer-text">서비스를 추천합니다!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="framer-ntn7d0">
                                    <div className="framer-1rhncfm"></div>
                                    <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                                        <div className="framer-d1aepi-container">
                                            <div className="framer-6CkqQ framer-vkCZz framer-idunJ framer-K1dSs framer-11ghnnt framer-v-1n81s41" data-framer-appear-id="11ghnnt" data-framer-name="Variant 2" data-highlight="true">
                                                <div className="framer-1k27qdv">
                                                    <div className="framer-awg93p">
                                                        <div className="framer-wamkf7">
                                                            <div className="framer-8t6dis">
                                                                <div className="framer-1m0oqv7" data-framer-component-type="RichTextContainer">
                                                                    <ul className="framer-text">
                                                                        <li data-preset-tag="p" className="framer-text framer-styles-preset-1393nay">
                                                                            <p className="framer-text framer-styles-preset-1393nay">1인 출판이라 일손이 달리지만 직원을 채용하긴 부담이 됩니다.</p>
                                                                        </li>
                                                                    </ul>
                                                                    <ul className="framer-text">
                                                                        <li data-preset-tag="p" className="framer-text framer-styles-preset-1393nay">
                                                                            <p className="framer-text framer-styles-preset-1393nay">마음에 드는 교정교열자(혹은 디자이너)를 찾기가 힘듭니다.</p>
                                                                        </li>
                                                                    </ul>
                                                                    <ul className="framer-text">
                                                                        <li data-preset-tag="p" className="framer-text framer-styles-preset-1393nay">
                                                                            <p className="framer-text framer-styles-preset-1393nay">출판사는 아니지만 1회성으로 도서를 출간해야 하는데 막막합니다.</p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="framer-1ov82ka">
                                                                    <div className="framer-16bgkqt" data-framer-component-type="RichTextContainer">
                                                                        <p className="framer-text framer-styles-preset-1393nay" data-styles-preset="k2f62c5pc">1인 출판사, 기관, 광고 대행사 등 모든 회사들과 함께합니다. 도서 장르, 출간 계획, 업무 범위 등 원하시는 조건에 맞추어 서비스를 제공합니다.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="framer-z5y7js" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text framer-styles-preset-xvtrjt">
                                                                        <br className="framer-text trailing-break" />
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="framer-13mw94z">
                                                        <div className="framer-8eu2ej">
                                                            <div data-framer-component-type="SVG" className="framer-ct6ksz" aria-hidden="true">
                                                                <div className="svgContainer">
                                                                    <svg>
                                                                        <use href="#svg2062490632_362" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="framer-17jqerb" data-highlight="true" data-framer-component-type="RichTextContainer">
                                                            <p className="framer-text">외주편집</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                                        <div className="framer-d1aepi-container">
                                            <div className="framer-6CkqQ framer-vkCZz framer-idunJ framer-K1dSs framer-11ghnnt framer-v-1n81s41" data-framer-appear-id="11ghnnt" data-framer-name="Variant 2" data-highlight="true">
                                                <div className="framer-1k27qdv">
                                                    <div className="framer-awg93p">
                                                        <div className="framer-wamkf7">
                                                            <div className="framer-8t6dis">
                                                                <div className="framer-1m0oqv7" data-framer-component-type="RichTextContainer">
                                                                    <ul className="framer-text">
                                                                        <li data-preset-tag="p" className="framer-text framer-styles-preset-1393nay">
                                                                            <p className="framer-text framer-styles-preset-1393nay">1인 출판이라 일손이 달리지만 직원을 채용하긴 부담이 됩니다.</p>
                                                                        </li>
                                                                    </ul>
                                                                    <ul className="framer-text">
                                                                        <li data-preset-tag="p" className="framer-text framer-styles-preset-1393nay">
                                                                            <p className="framer-text framer-styles-preset-1393nay">마음에 드는 교정교열자(혹은 디자이너)를 찾기가 힘듭니다.</p>
                                                                        </li>
                                                                    </ul>
                                                                    <ul className="framer-text">
                                                                        <li data-preset-tag="p" className="framer-text framer-styles-preset-1393nay">
                                                                            <p className="framer-text framer-styles-preset-1393nay">출판사는 아니지만 1회성으로 도서를 출간해야 하는데 막막합니다.</p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="framer-1ov82ka">
                                                                    <div className="framer-16bgkqt" data-framer-component-type="RichTextContainer">
                                                                        <p className="framer-text framer-styles-preset-1393nay" data-styles-preset="k2f62c5pc">1인 출판사, 기관, 광고 대행사 등 모든 회사들과 함께합니다. 도서 장르, 출간 계획, 업무 범위 등 원하시는 조건에 맞추어 서비스를 제공합니다.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="framer-z5y7js" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text framer-styles-preset-xvtrjt">
                                                                        <br className="framer-text trailing-break" />
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="framer-13mw94z">
                                                        <div className="framer-8eu2ej">
                                                            <div data-framer-component-type="SVG" className="framer-ct6ksz" aria-hidden="true">
                                                                <div className="svgContainer">
                                                                    <svg>
                                                                        <use href="#svg2062490632_362" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="framer-17jqerb" data-highlight="true" data-framer-component-type="RichTextContainer">
                                                            <p className="framer-text">외주편집</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                                        <div className="framer-d1aepi-container">
                                            <div className="framer-6CkqQ framer-vkCZz framer-idunJ framer-K1dSs framer-11ghnnt framer-v-1n81s41" data-framer-appear-id="11ghnnt" data-framer-name="Variant 2" data-highlight="true">
                                                <div className="framer-1k27qdv">
                                                    <div className="framer-awg93p">
                                                        <div className="framer-wamkf7">
                                                            <div className="framer-8t6dis">
                                                                <div className="framer-1m0oqv7" data-framer-component-type="RichTextContainer">
                                                                    <ul className="framer-text">
                                                                        <li data-preset-tag="p" className="framer-text framer-styles-preset-1393nay">
                                                                            <p className="framer-text framer-styles-preset-1393nay">1인 출판이라 일손이 달리지만 직원을 채용하긴 부담이 됩니다.</p>
                                                                        </li>
                                                                    </ul>
                                                                    <ul className="framer-text">
                                                                        <li data-preset-tag="p" className="framer-text framer-styles-preset-1393nay">
                                                                            <p className="framer-text framer-styles-preset-1393nay">마음에 드는 교정교열자(혹은 디자이너)를 찾기가 힘듭니다.</p>
                                                                        </li>
                                                                    </ul>
                                                                    <ul className="framer-text">
                                                                        <li data-preset-tag="p" className="framer-text framer-styles-preset-1393nay">
                                                                            <p className="framer-text framer-styles-preset-1393nay">출판사는 아니지만 1회성으로 도서를 출간해야 하는데 막막합니다.</p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="framer-1ov82ka">
                                                                    <div className="framer-16bgkqt" data-framer-component-type="RichTextContainer">
                                                                        <p className="framer-text framer-styles-preset-1393nay" data-styles-preset="k2f62c5pc">1인 출판사, 기관, 광고 대행사 등 모든 회사들과 함께합니다. 도서 장르, 출간 계획, 업무 범위 등 원하시는 조건에 맞추어 서비스를 제공합니다.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="framer-z5y7js" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text framer-styles-preset-xvtrjt">
                                                                        <br className="framer-text trailing-break" />
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="framer-13mw94z">
                                                        <div className="framer-8eu2ej">
                                                            <div data-framer-component-type="SVG" className="framer-ct6ksz" aria-hidden="true">
                                                                <div className="svgContainer">
                                                                    <svg>
                                                                        <use href="#svg2062490632_362" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="framer-17jqerb" data-highlight="true" data-framer-component-type="RichTextContainer">
                                                            <p className="framer-text">외주편집</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="framer-z5tsyy"></div>
                                    <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                                        <div className="framer-wd5sqt-container">
                                            <div className="framer-6CkqQ framer-vkCZz framer-idunJ framer-K1dSs framer-11ghnnt framer-v-1n81s41" data-framer-appear-id="11ghnnt" data-framer-name="Variant 2" data-highlight="true">
                                                <div className="framer-1k27qdv">
                                                    <div className="framer-awg93p">
                                                        <div className="framer-wamkf7">
                                                            <div className="framer-8t6dis">
                                                                <div className="framer-1m0oqv7" data-framer-component-type="RichTextContainer">
                                                                    <ul className="framer-text">
                                                                        <li data-preset-tag="p" className="framer-text framer-styles-preset-1393nay">
                                                                            <p className="framer-text framer-styles-preset-1393nay">수업 자료를 깔끔하게 책으로 만들고 싶어요.</p>
                                                                        </li>
                                                                    </ul>
                                                                    <ul className="framer-text">
                                                                        <li data-preset-tag="p" className="framer-text framer-styles-preset-1393nay">
                                                                            <p className="framer-text framer-styles-preset-1393nay">유튜브의 강의 내용을 교재로 엮어서 스마트스토어에 판매하려 해요.</p>
                                                                        </li>
                                                                    </ul>
                                                                    <ul className="framer-text">
                                                                        <li data-preset-tag="p" className="framer-text framer-styles-preset-1393nay">
                                                                            <p className="framer-text framer-styles-preset-1393nay">우리 아이의 그림으로 동화책을 만들어 선물하고 싶어요.</p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="framer-1ov82ka">
                                                                    <div className="framer-16bgkqt" data-framer-component-type="RichTextContainer">
                                                                        <p className="framer-text framer-styles-preset-1393nay" data-styles-preset="k2f62c5pc">책은 커리어나 수익을 위한 수단이 되기도 하고, 자신만의 &lapos;굿즈&rapos;가 되기도 합니다. 출간까지의 생소한 과정을 일랑북스와 함께하세요.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="framer-z5y7js" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text framer-styles-preset-xvtrjt">-소장용 또는 비매품 도서를 주 대상으로 합니다 (ISBN 발급 불가).</p>
                                                                    <p className="framer-text framer-styles-preset-xvtrjt">-사업자등록이 되어 있으신 분은 ISBN 발급이 가능하나, 서점 유통 및 판매는 대행하지 않습니다.</p>
                                                                    <p className="framer-text framer-styles-preset-xvtrjt">
                                                                        <br className="framer-text trailing-break" />
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="framer-13mw94z">
                                                        <div className="framer-8eu2ej">
                                                            <div data-framer-component-type="SVG" className="framer-ct6ksz" aria-hidden="true">
                                                                <div className="svgContainer">
                                                                    <svg>
                                                                        <use href="#svg2062490632_362" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="framer-17jqerb" data-highlight="true" data-framer-component-type="RichTextContainer">
                                                            <p className="framer-text">자비출판</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                                        <div className="framer-wd5sqt-container">
                                            <div className="framer-6CkqQ framer-vkCZz framer-idunJ framer-K1dSs framer-11ghnnt framer-v-11ghnnt" data-framer-appear-id="11ghnnt" data-framer-name="Variant 1" data-highlight="true">
                                                <div className="framer-1k27qdv">
                                                    <div className="framer-13mw94z">
                                                        <div className="framer-8eu2ej">
                                                            <div data-framer-component-type="SVG" className="framer-ct6ksz" aria-hidden="true">
                                                                <div className="svgContainer">
                                                                    <svg>
                                                                        <use href="#svg869523522_361" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="framer-17jqerb" data-framer-component-type="RichTextContainer">
                                                            <p className="framer-text">자비출판</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                                        <div className="framer-wd5sqt-container">
                                            <div className="framer-6CkqQ framer-vkCZz framer-idunJ framer-K1dSs framer-11ghnnt framer-v-11ghnnt" data-framer-appear-id="11ghnnt" data-framer-name="Variant 1" data-highlight="true">
                                                <div className="framer-1k27qdv">
                                                    <div className="framer-13mw94z">
                                                        <div className="framer-8eu2ej">
                                                            <div data-framer-component-type="SVG" className="framer-ct6ksz" aria-hidden="true">
                                                                <div className="svgContainer">
                                                                    <svg>
                                                                        <use href="#svg869523522_361" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="framer-17jqerb" data-framer-component-type="RichTextContainer">
                                                            <p className="framer-text">자비출판</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="framer-1wsuqcu"></div>
                                    <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                                        <div className="framer-1x17pch-container">
                                            <div className="framer-6CkqQ framer-vkCZz framer-idunJ framer-K1dSs framer-11ghnnt framer-v-11ghnnt" data-framer-appear-id="11ghnnt" data-framer-name="Variant 1" data-highlight="true">
                                                <div className="framer-1k27qdv">
                                                    <div className="framer-13mw94z">
                                                        <div className="framer-8eu2ej">
                                                            <div data-framer-component-type="SVG" className="framer-ct6ksz" aria-hidden="true">
                                                                <div className="svgContainer">
                                                                    <svg>
                                                                        <use href="#svg869523522_361" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="framer-17jqerb" data-framer-component-type="RichTextContainer">
                                                            <p className="framer-text">출판코칭</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                                        <div className="framer-1x17pch-container">
                                            <div className="framer-6CkqQ framer-vkCZz framer-idunJ framer-K1dSs framer-11ghnnt framer-v-11ghnnt" data-framer-appear-id="11ghnnt" data-framer-name="Variant 1" data-highlight="true">
                                                <div className="framer-1k27qdv">
                                                    <div className="framer-13mw94z">
                                                        <div className="framer-8eu2ej">
                                                            <div data-framer-component-type="SVG" className="framer-ct6ksz" aria-hidden="true">
                                                                <div className="svgContainer">
                                                                    <svg>
                                                                        <use href="#svg869523522_361" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="framer-17jqerb" data-framer-component-type="RichTextContainer">
                                                            <p className="framer-text">출판코칭</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                                        <div className="framer-1x17pch-container">
                                            <div className="framer-6CkqQ framer-vkCZz framer-idunJ framer-K1dSs framer-11ghnnt framer-v-11ghnnt" data-framer-appear-id="11ghnnt" data-framer-name="Variant 1" data-highlight="true">
                                                <div className="framer-1k27qdv">
                                                    <div className="framer-13mw94z">
                                                        <div className="framer-8eu2ej">
                                                            <div data-framer-component-type="SVG" className="framer-ct6ksz" aria-hidden="true">
                                                                <div className="svgContainer">
                                                                    <svg>
                                                                        <use href="#svg869523522_361" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="framer-17jqerb" data-framer-component-type="RichTextContainer">
                                                            <p className="framer-text">출판코칭</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="framer-1977wgu"></div>
                                </div>
                            </div>
                        </div>
                        <div className="framer-j9mvpp" data-framer-name="섹션3: 출간과정">
                            <div className="framer-7ki120">
                                <div className="framer-fxsh2j">
                                    <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                                        <div className="framer-1fv0bmg" data-framer-component-type="RichTextContainer">
                                            <p className="framer-text">Publising Process</p>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                                        <div className="framer-1fv0bmg" data-framer-component-type="RichTextContainer">
                                            <p className="framer-text">Publising Process</p>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                                        <div className="framer-1fv0bmg" data-framer-component-type="RichTextContainer">
                                            <p className="framer-text">Publising Process</p>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-1vk2m8p">
                                        <div className="framer-ungifs">
                                            <div className="framer-ns5u59" data-framer-name="카드">
                                                <div className="framer-1v81gb5">
                                                    <div className="framer-z74aj0">
                                                        <div className="framer-1rf3m8z">
                                                            <div data-framer-component-type="SVG" className="framer-jdfis2" aria-hidden="true">
                                                                <div className="svgContainer">
                                                                    <svg>
                                                                        <use href="#svg-765309186_514" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="framer-1ssi1oz">
                                                            <div className="ssr-variant hidden-xpwx9r">
                                                                <div className="framer-120b4qm" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">STEP 1</p>
                                                                </div>
                                                            </div>
                                                            <div className="ssr-variant hidden-72rtr7">
                                                                <div className="framer-120b4qm" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">STEP 1</p>
                                                                </div>
                                                            </div>
                                                            <div className="ssr-variant hidden-xpwx9r">
                                                                <div className="framer-ifcqar" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">출판 상담</p>
                                                                </div>
                                                            </div>
                                                            <div className="ssr-variant hidden-72rtr7">
                                                                <div className="framer-ifcqar" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">출판 상담</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="framer-t8650y">
                                                        <div className="ssr-variant hidden-xpwx9r">
                                                            <div className="framer-1yc4b50" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">견적 문의 내용을 바탕으로 상담을 진행합니다. 견적 문의와 함께 원고의 일부를 미리 전송해 주셔야 정확한 상담이 가능합니다. (yilang2019@naver.com)</p>
                                                            </div>
                                                        </div>
                                                        <div className="ssr-variant hidden-72rtr7">
                                                            <div className="framer-1yc4b50" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">견적 문의 내용을 바탕으로 상담을 진행합니다. 견적 문의와 함께 원고의 일부를 미리 전송해 주셔야 정확한 상담이 가능합니다. (yilang2019@naver.com)</p>
                                                            </div>
                                                        </div>
                                                        <div className="ssr-variant hidden-xpwx9r">
                                                            <div className="framer-1kvoy42" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">-상담은 이메일, 전화, 카카오톡 중 고객님이 편한 방식으로 진행합니다.</p>
                                                                <p className="framer-text">-도서의 분야에 따라 책의 크기, 원고의 전체 분량, 내지의 색(흑백, 컬러), 표지의 대략적인 스타일 및 후가공의 진행 여부, 제작 부수, 일정 등을 조율합니다.</p>
                                                            </div>
                                                        </div>
                                                        <div className="ssr-variant hidden-72rtr7">
                                                            <div className="framer-1kvoy42" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">-상담은 이메일, 전화, 카카오톡 중 고객님이 편한 방식으로 진행합니다.</p>
                                                                <p className="framer-text">-도서의 분야에 따라 책의 크기, 원고의 전체 분량, 내지의 색(흑백, 컬러), 표지의 대략적인 스타일 및 후가공의 진행 여부, 제작 부수, 일정 등을 조율합니다.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="framer-eurttm" data-framer-name="카드">
                                                <div className="framer-dsdo6h">
                                                    <div className="framer-6nri89">
                                                        <div className="framer-127zlra">
                                                            <div data-framer-component-type="SVG" className="framer-1ly5mvp" aria-hidden="true">
                                                                <div className="svgContainer">
                                                                    <svg>
                                                                        <use href="#svg-1850599495_1666" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="framer-61h0em">
                                                            <div className="ssr-variant hidden-xpwx9r">
                                                                <div className="framer-grly0q" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">STEP 2</p>
                                                                </div>
                                                            </div>
                                                            <div className="ssr-variant hidden-72rtr7">
                                                                <div className="framer-grly0q" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">STEP 2</p>
                                                                </div>
                                                            </div>
                                                            <div className="ssr-variant hidden-xpwx9r">
                                                                <div className="framer-1xggcki" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">출판 계약</p>
                                                                </div>
                                                            </div>
                                                            <div className="ssr-variant hidden-72rtr7">
                                                                <div className="framer-1xggcki" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">출판 계약</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="framer-9i6ccw">
                                                        <div className="ssr-variant hidden-xpwx9r">
                                                            <div className="framer-18y0oz0" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">상담 시 협의한 내용을 바탕으로 계약서를 작성합니다.</p>
                                                            </div>
                                                        </div>
                                                        <div className="ssr-variant hidden-72rtr7">
                                                            <div className="framer-18y0oz0" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">상담 시 협의한 내용을 바탕으로 계약서를 작성합니다.</p>
                                                            </div>
                                                        </div>
                                                        <div className="ssr-variant hidden-xpwx9r">
                                                            <div className="framer-1uta7pj" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">-작성을 완료한 계약서는 저자님과 일랑북스가 1부씩 보관합니다. 계약 체결 후 저자님은 약정 금액을 송금 후, 완전 완고를 이메일로 전송합니다.</p>
                                                            </div>
                                                        </div>
                                                        <div className="ssr-variant hidden-72rtr7">
                                                            <div className="framer-1uta7pj" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">-작성을 완료한 계약서는 저자님과 일랑북스가 1부씩 보관합니다. 계약 체결 후 저자님은 약정 금액을 송금 후, 완전 완고를 이메일로 전송합니다.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="framer-s2frp8" data-framer-name="카드">
                                                <div className="framer-1fiuojn">
                                                    <div className="framer-18xh5t0">
                                                        <div className="framer-1r5udmd">
                                                            <div data-framer-component-type="SVG" className="framer-uz307i" aria-hidden="true">
                                                                <div className="svgContainer">
                                                                    <svg>
                                                                        <use href="#svg1096314896_671" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="framer-vzubp5">
                                                            <div className="ssr-variant hidden-xpwx9r">
                                                                <div className="framer-1ukknj2" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">STEP 3</p>
                                                                </div>
                                                            </div>
                                                            <div className="ssr-variant hidden-72rtr7">
                                                                <div className="framer-1ukknj2" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">STEP 3</p>
                                                                </div>
                                                            </div>
                                                            <div className="ssr-variant hidden-xpwx9r">
                                                                <div className="framer-dcr7r4" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">원고 검토</p>
                                                                </div>
                                                            </div>
                                                            <div className="ssr-variant hidden-72rtr7">
                                                                <div className="framer-dcr7r4" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">원고 검토</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="framer-1ixby7t">
                                                        <div className="ssr-variant hidden-xpwx9r">
                                                            <div className="framer-lf3f74" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">담당 편집자가 기획 방향, 집필 수정 사항 등을 검토합니다.</p>
                                                            </div>
                                                        </div>
                                                        <div className="ssr-variant hidden-72rtr7">
                                                            <div className="framer-lf3f74" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">담당 편집자가 기획 방향, 집필 수정 사항 등을 검토합니다.</p>
                                                            </div>
                                                        </div>
                                                        <div className="ssr-variant hidden-xpwx9r">
                                                            <div className="framer-zqm0zf" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">-담당 편집자가 원고 검토 후 수정이 필요한 경우에 한해 저자님께 피드백을 드리고 수정을 요청합니다. 원고의 완성도를 높이는 것에 중점을 둔 작업 단계이므로, 저자님의 적극적인 참여가 요구됩니다.</p>
                                                            </div>
                                                        </div>
                                                        <div className="ssr-variant hidden-72rtr7">
                                                            <div className="framer-zqm0zf" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">-담당 편집자가 원고 검토 후 수정이 필요한 경우에 한해 저자님께 피드백을 드리고 수정을 요청합니다. 원고의 완성도를 높이는 것에 중점을 둔 작업 단계이므로, 저자님의 적극적인 참여가 요구됩니다.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="framer-le58hi" data-framer-name="카드">
                                                <div className="framer-8fssiz">
                                                    <div className="framer-8iq45f">
                                                        <div className="framer-1upypqq">
                                                            <div data-framer-component-type="SVG" className="framer-1gwhken" aria-hidden="true"></div>
                                                        </div>
                                                        <div className="framer-2gfdwx">
                                                            <div className="ssr-variant hidden-xpwx9r">
                                                                <div className="framer-18kndp" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">STEP 4</p>
                                                                </div>
                                                            </div>
                                                            <div className="ssr-variant hidden-72rtr7">
                                                                <div className="framer-18kndp" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">STEP 4</p>
                                                                </div>
                                                            </div>
                                                            <div className="ssr-variant hidden-xpwx9r">
                                                                <div className="framer-1t049f4" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">본문 디자인</p>
                                                                </div>
                                                            </div>
                                                            <div className="ssr-variant hidden-72rtr7">
                                                                <div className="framer-1t049f4" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">본문 디자인</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="framer-116nmuc">
                                                        <div className="ssr-variant hidden-xpwx9r">
                                                            <div className="framer-qtfdsc" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">담당 디자이너가 원고의 콘셉트에 맞게 내지 디자인을 진행합니다.</p>
                                                            </div>
                                                        </div>
                                                        <div className="ssr-variant hidden-72rtr7">
                                                            <div className="framer-qtfdsc" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">담당 디자이너가 원고의 콘셉트에 맞게 내지 디자인을 진행합니다.</p>
                                                            </div>
                                                        </div>
                                                        <div className="ssr-variant hidden-xpwx9r">
                                                            <div className="framer-y2m8ac" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">-본문 디자인 시안 2종의 PDF 파일을 저자님께 전송하면, 그중 1종을 선택하시어 더욱 세밀한 수정을 통해 완성도를 높여 나갑니다.</p>
                                                            </div>
                                                        </div>
                                                        <div className="ssr-variant hidden-72rtr7">
                                                            <div className="framer-y2m8ac" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">-본문 디자인 시안 2종의 PDF 파일을 저자님께 전송하면, 그중 1종을 선택하시어 더욱 세밀한 수정을 통해 완성도를 높여 나갑니다.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="framer-172a7xb" data-framer-name="카드">
                                                <div className="framer-sg3bwm">
                                                    <div className="framer-5s49l5">
                                                        <div className="framer-1g66xth">
                                                            <div data-framer-component-type="SVG" className="framer-qi2uut" aria-hidden="true">
                                                                <div className="svgContainer">
                                                                    <svg>
                                                                        <use href="#svg931396772_545" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="framer-17bvmll">
                                                            <div className="ssr-variant hidden-xpwx9r">
                                                                <div className="framer-cq6bbi" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">STEP 5</p>
                                                                </div>
                                                            </div>
                                                            <div className="ssr-variant hidden-72rtr7">
                                                                <div className="framer-cq6bbi" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">STEP 5</p>
                                                                </div>
                                                            </div>
                                                            <div className="ssr-variant hidden-xpwx9r">
                                                                <div className="framer-1wphy1i" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">조판</p>
                                                                </div>
                                                            </div>
                                                            <div className="ssr-variant hidden-72rtr7">
                                                                <div className="framer-1wphy1i" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">조판</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="framer-84i4vp">
                                                        <div className="ssr-variant hidden-xpwx9r">
                                                            <div className="framer-1s6aocu" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">담당 조판자가 완성된 원고를 확정된 내지 디자인에 맞추어 편집 프로그램으로 변환합니다.</p>
                                                            </div>
                                                        </div>
                                                        <div className="ssr-variant hidden-72rtr7">
                                                            <div className="framer-1s6aocu" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">담당 조판자가 완성된 원고를 확정된 내지 디자인에 맞추어 편집 프로그램으로 변환합니다.</p>
                                                            </div>
                                                        </div>
                                                        <div className="ssr-variant hidden-xpwx9r">
                                                            <div className="framer-3gg43g" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">-교재나 실용서의 경우 타 분야의 도서에 비해 사용하는 서체의 종류가 많기 때문에 경력이 많은 조판 작업자가 반드시 필요합니다. 일랑북스는 도서의 종류에 따라 해당 도서의 경험이 많은 전문 조판자를 배정하여 작업을 진행합니다.</p>
                                                            </div>
                                                        </div>
                                                        <div className="ssr-variant hidden-72rtr7">
                                                            <div className="framer-3gg43g" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">-교재나 실용서의 경우 타 분야의 도서에 비해 사용하는 서체의 종류가 많기 때문에 경력이 많은 조판 작업자가 반드시 필요합니다. 일랑북스는 도서의 종류에 따라 해당 도서의 경험이 많은 전문 조판자를 배정하여 작업을 진행합니다.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="framer-xgul7y" data-framer-name="카드">
                                                <div className="framer-xxlm8f">
                                                    <div className="framer-9z3pxr">
                                                        <div className="framer-bjcxk">
                                                            <div data-framer-component-type="SVG" className="framer-tbdaur" aria-hidden="true">
                                                                <div className="svgContainer">
                                                                    <svg>
                                                                        <use href="#svg-2074834845_572" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="framer-1z8mnk">
                                                            <div className="ssr-variant hidden-xpwx9r">
                                                                <div className="framer-1cjk4mr" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">STEP 6</p>
                                                                </div>
                                                            </div>
                                                            <div className="ssr-variant hidden-72rtr7">
                                                                <div className="framer-1cjk4mr" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">STEP 6</p>
                                                                </div>
                                                            </div>
                                                            <div className="ssr-variant hidden-xpwx9r">
                                                                <div className="framer-1o176r2" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">교정</p>
                                                                </div>
                                                            </div>
                                                            <div className="ssr-variant hidden-72rtr7">
                                                                <div className="framer-1o176r2" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">교정</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="framer-58xirx">
                                                        <div className="ssr-variant hidden-xpwx9r">
                                                            <div className="framer-jx1rt4" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">담당 편집자가 3회에 걸쳐 교정을 진행합니다.</p>
                                                            </div>
                                                        </div>
                                                        <div className="ssr-variant hidden-72rtr7">
                                                            <div className="framer-jx1rt4" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">담당 편집자가 3회에 걸쳐 교정을 진행합니다.</p>
                                                            </div>
                                                        </div>
                                                        <div className="ssr-variant hidden-xpwx9r">
                                                            <div className="framer-242rbk" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">-저자님께는 2교 교정지를 pdf 파일로 보내 드립니다. 편집자가 요구하는 기간 내에 확인하신 후 수정 사항을 pdf 교정지에 직접 기재하시거나 워드/한글 파일에 정리하여 주시면 2교 수정 시 모두 반영합니다.</p>
                                                                <p className="framer-text">-교정 단계 중 담당 편집자가 저자님이 별도로 준비하실 자료(머리말, 작가 이력 등)를 요청합니다.</p>
                                                            </div>
                                                        </div>
                                                        <div className="ssr-variant hidden-72rtr7">
                                                            <div className="framer-242rbk" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">-저자님께는 2교 교정지를 pdf 파일로 보내 드립니다. 편집자가 요구하는 기간 내에 확인하신 후 수정 사항을 pdf 교정지에 직접 기재하시거나 워드/한글 파일에 정리하여 주시면 2교 수정 시 모두 반영합니다.</p>
                                                                <p className="framer-text">-교정 단계 중 담당 편집자가 저자님이 별도로 준비하실 자료(머리말, 작가 이력 등)를 요청합니다.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="framer-19za7jz" data-framer-name="카드">
                                                <div className="framer-1rc9mae">
                                                    <div className="framer-uzqock">
                                                        <div className="framer-10dvckg">
                                                            <div data-framer-component-type="SVG" className="framer-1xhyp0j" aria-hidden="true">
                                                                <div className="svgContainer">
                                                                    <svg>
                                                                        <use href="#svg-1530989827_928" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="framer-1k2js3z">
                                                            <div className="ssr-variant hidden-xpwx9r">
                                                                <div className="framer-1qsu6mm" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">STEP 7</p>
                                                                </div>
                                                            </div>
                                                            <div className="ssr-variant hidden-72rtr7">
                                                                <div className="framer-1qsu6mm" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">STEP 7</p>
                                                                </div>
                                                            </div>
                                                            <div className="ssr-variant hidden-xpwx9r">
                                                                <div className="framer-13rho1f" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">표지 디자인</p>
                                                                </div>
                                                            </div>
                                                            <div className="ssr-variant hidden-72rtr7">
                                                                <div className="framer-13rho1f" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">표지 디자인</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="framer-7tdc6b">
                                                        <div className="ssr-variant hidden-xpwx9r">
                                                            <div className="framer-1bhs5gg" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">담당 디자이너가 표지 디자인을 진행합니다.</p>
                                                            </div>
                                                        </div>
                                                        <div className="ssr-variant hidden-72rtr7">
                                                            <div className="framer-1bhs5gg" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">담당 디자이너가 표지 디자인을 진행합니다.</p>
                                                            </div>
                                                        </div>
                                                        <div className="ssr-variant hidden-xpwx9r">
                                                            <div className="framer-ejoxzo" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">-진행 방식은 본문 디자인과 같습니다. 표지 디자인 시안 2종의 PDF 파일을 저자님께 전송하면, 그중 1종을 선택하시어 추가 수정을 통해 완성도를 높여 나갑니다.</p>
                                                            </div>
                                                        </div>
                                                        <div className="ssr-variant hidden-72rtr7">
                                                            <div className="framer-ejoxzo" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">-진행 방식은 본문 디자인과 같습니다. 표지 디자인 시안 2종의 PDF 파일을 저자님께 전송하면, 그중 1종을 선택하시어 추가 수정을 통해 완성도를 높여 나갑니다.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="framer-x86o6t" data-framer-name="카드">
                                                <div className="framer-17brulb">
                                                    <div className="framer-pz2tuc">
                                                        <div className="framer-1gk6qwi">
                                                            <div data-framer-component-type="SVG" className="framer-kpzpeh" aria-hidden="true">
                                                                <div className="svgContainer">
                                                                    <svg>
                                                                        <use href="#svg436509633_693" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="framer-1aopork">
                                                            <div className="ssr-variant hidden-xpwx9r">
                                                                <div className="framer-1n04h9" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">STEP 8</p>
                                                                </div>
                                                            </div>
                                                            <div className="ssr-variant hidden-72rtr7">
                                                                <div className="framer-1n04h9" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">STEP 8</p>
                                                                </div>
                                                            </div>
                                                            <div className="ssr-variant hidden-xpwx9r">
                                                                <div className="framer-9399wl" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">제작</p>
                                                                </div>
                                                            </div>
                                                            <div className="ssr-variant hidden-72rtr7">
                                                                <div className="framer-9399wl" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">제작</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="framer-fz1nhy">
                                                        <div className="ssr-variant hidden-xpwx9r">
                                                            <div className="framer-1qh0c3v" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">본문과 표지의 최종 PDF 파일을 확인 후 계약된 사양에 따라 제작이 진행됩니다.</p>
                                                            </div>
                                                        </div>
                                                        <div className="ssr-variant hidden-72rtr7">
                                                            <div className="framer-1qh0c3v" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">본문과 표지의 최종 PDF 파일을 확인 후 계약된 사양에 따라 제작이 진행됩니다.</p>
                                                            </div>
                                                        </div>
                                                        <div className="ssr-variant hidden-xpwx9r">
                                                            <div className="framer-4oghw9" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">-제작은 일반적으로 평일 기준 7일 정도 소요되며 제작 사양에 따라 기간은 변동될 수 있습니다. 인쇄 발주 전에 잔금을 송금하시면 제작 완료 후 계약서에 기재된 주소로 도서를 발송합니다.</p>
                                                            </div>
                                                        </div>
                                                        <div className="ssr-variant hidden-72rtr7">
                                                            <div className="framer-4oghw9" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">-제작은 일반적으로 평일 기준 7일 정도 소요되며 제작 사양에 따라 기간은 변동될 수 있습니다. 인쇄 발주 전에 잔금을 송금하시면 제작 완료 후 계약서에 기재된 주소로 도서를 발송합니다.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                                        <div className="framer-ungifs">
                                            <div>
                                                <div className="framer-ns5u59" data-framer-name="카드">
                                                    <div className="framer-1v81gb5">
                                                        <div className="framer-z74aj0">
                                                            <div className="framer-1rf3m8z">
                                                                <div data-framer-component-type="SVG" className="framer-jdfis2" aria-hidden="true">
                                                                    <div className="svgContainer">
                                                                        <svg>
                                                                            <use href="#svg-765309186_514" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="framer-1ssi1oz">
                                                                <div className="framer-120b4qm" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">STEP 1</p>
                                                                </div>
                                                                <div className="framer-ifcqar" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">출판 상담</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="framer-t8650y">
                                                            <div className="framer-1yc4b50" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">견적 문의 내용을 바탕으로 상담을 진행합니다. 견적 문의와 함께 원고의 일부를 미리 전송해 주셔야 정확한 상담이 가능합니다. (yilang2019@naver.com)</p>
                                                            </div>
                                                            <div className="framer-1kvoy42" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">-상담은 이메일, 전화, 카카오톡 중 고객님이 편한 방식으로 진행합니다.</p>
                                                                <p className="framer-text">-도서의 분야에 따라 책의 크기, 원고의 전체 분량, 내지의 색(흑백, 컬러), 표지의 대략적인 스타일 및 후가공의 진행 여부, 제작 부수, 일정 등을 조율합니다.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="framer-s2frp8" data-framer-name="카드">
                                                    <div className="framer-1fiuojn">
                                                        <div className="framer-18xh5t0">
                                                            <div className="framer-1r5udmd">
                                                                <div data-framer-component-type="SVG" className="framer-uz307i" aria-hidden="true">
                                                                    <div className="svgContainer">
                                                                        <svg>
                                                                            <use href="#svg1096314896_671" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="framer-vzubp5">
                                                                <div className="framer-1ukknj2" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">STEP 3</p>
                                                                </div>
                                                                <div className="framer-dcr7r4" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">원고 검토</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="framer-1ixby7t">
                                                            <div className="framer-lf3f74" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">담당 편집자가 기획 방향, 집필 수정 사항 등을 검토합니다.</p>
                                                            </div>
                                                            <div className="framer-zqm0zf" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">-담당 편집자가 원고 검토 후 수정이 필요한 경우에 한해 저자님께 피드백을 드리고 수정을 요청합니다. 원고의 완성도를 높이는 것에 중점을 둔 작업 단계이므로, 저자님의 적극적인 참여가 요구됩니다.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="framer-172a7xb" data-framer-name="카드">
                                                    <div className="framer-sg3bwm">
                                                        <div className="framer-5s49l5">
                                                            <div className="framer-1g66xth">
                                                                <div data-framer-component-type="SVG" className="framer-qi2uut" aria-hidden="true">
                                                                    <div className="svgContainer">
                                                                        <svg>
                                                                            <use href="#svg931396772_545" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="framer-17bvmll">
                                                                <div className="framer-cq6bbi" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">STEP 5</p>
                                                                </div>
                                                                <div className="framer-1wphy1i" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">조판</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="framer-84i4vp">
                                                            <div className="framer-1s6aocu" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">담당 조판자가 완성된 원고를 확정된 내지 디자인에 맞추어 편집 프로그램으로 변환합니다.</p>
                                                            </div>
                                                            <div className="framer-3gg43g" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">-교재나 실용서의 경우 타 분야의 도서에 비해 사용하는 서체의 종류가 많기 때문에 경력이 많은 조판 작업자가 반드시 필요합니다. 일랑북스는 도서의 종류에 따라 해당 도서의 경험이 많은 전문 조판자를 배정하여 작업을 진행합니다.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="framer-19za7jz" data-framer-name="카드">
                                                    <div className="framer-1rc9mae">
                                                        <div className="framer-uzqock">
                                                            <div className="framer-10dvckg">
                                                                <div data-framer-component-type="SVG" className="framer-1xhyp0j" aria-hidden="true">
                                                                    <div className="svgContainer">
                                                                        <svg>
                                                                            <use href="#svg-1530989827_928" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="framer-1k2js3z">
                                                                <div className="framer-1qsu6mm" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">STEP 7</p>
                                                                </div>
                                                                <div className="framer-13rho1f" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">표지 디자인</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="framer-7tdc6b">
                                                            <div className="framer-1bhs5gg" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">담당 디자이너가 표지 디자인을 진행합니다.</p>
                                                            </div>
                                                            <div className="framer-ejoxzo" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">-진행 방식은 본문 디자인과 같습니다. 표지 디자인 시안 2종의 PDF 파일을 저자님께 전송하면, 그중 1종을 선택하시어 추가 수정을 통해 완성도를 높여 나갑니다.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="framer-eurttm" data-framer-name="카드">
                                                    <div className="framer-dsdo6h">
                                                        <div className="framer-6nri89">
                                                            <div className="framer-127zlra">
                                                                <div data-framer-component-type="SVG" className="framer-1ly5mvp" aria-hidden="true">
                                                                    <div className="svgContainer">
                                                                        <svg>
                                                                            <use href="#svg-1850599495_1666" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="framer-61h0em">
                                                                <div className="framer-grly0q" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">STEP 2</p>
                                                                </div>
                                                                <div className="framer-1xggcki" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">출판 계약</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="framer-9i6ccw">
                                                            <div className="framer-18y0oz0" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">상담 시 협의한 내용을 바탕으로 계약서를 작성합니다.</p>
                                                            </div>
                                                            <div className="framer-1uta7pj" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">-작성을 완료한 계약서는 저자님과 일랑북스가 1부씩 보관합니다. 계약 체결 후 저자님은 약정 금액을 송금 후, 완전 완고를 이메일로 전송합니다.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="framer-le58hi" data-framer-name="카드">
                                                    <div className="framer-8fssiz">
                                                        <div className="framer-8iq45f">
                                                            <div className="framer-1upypqq">
                                                                <div data-framer-component-type="SVG" className="framer-1gwhken" aria-hidden="true"></div>
                                                            </div>
                                                            <div className="framer-2gfdwx">
                                                                <div className="framer-18kndp" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">STEP 4</p>
                                                                </div>
                                                                <div className="framer-1t049f4" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">본문 디자인</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="framer-116nmuc">
                                                            <div className="framer-qtfdsc" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">담당 디자이너가 원고의 콘셉트에 맞게 내지 디자인을 진행합니다.</p>
                                                            </div>
                                                            <div className="framer-y2m8ac" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">-본문 디자인 시안 2종의 PDF 파일을 저자님께 전송하면, 그중 1종을 선택하시어 더욱 세밀한 수정을 통해 완성도를 높여 나갑니다.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="framer-xgul7y" data-framer-name="카드">
                                                    <div className="framer-xxlm8f">
                                                        <div className="framer-9z3pxr">
                                                            <div className="framer-bjcxk">
                                                                <div data-framer-component-type="SVG" className="framer-tbdaur" aria-hidden="true">
                                                                    <div className="svgContainer">
                                                                        <svg>
                                                                            <use href="#svg-2074834845_572" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="framer-1z8mnk">
                                                                <div className="framer-1cjk4mr" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">STEP 6</p>
                                                                </div>
                                                                <div className="framer-1o176r2" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">교정</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="framer-58xirx">
                                                            <div className="framer-jx1rt4" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">담당 편집자가 3회에 걸쳐 교정을 진행합니다.</p>
                                                            </div>
                                                            <div className="framer-242rbk" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">-저자님께는 2교 교정지를 pdf 파일로 보내 드립니다. 편집자가 요구하는 기간 내에 확인하신 후 수정 사항을 pdf 교정지에 직접 기재하시거나 워드/한글 파일에 정리하여 주시면 2교 수정 시 모두 반영합니다.</p>
                                                                <p className="framer-text">-교정 단계 중 담당 편집자가 저자님이 별도로 준비하실 자료(머리말, 작가 이력 등)를 요청합니다.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="framer-x86o6t" data-framer-name="카드">
                                                    <div className="framer-17brulb">
                                                        <div className="framer-pz2tuc">
                                                            <div className="framer-1gk6qwi">
                                                                <div data-framer-component-type="SVG" className="framer-kpzpeh" aria-hidden="true">
                                                                    <div className="svgContainer">
                                                                        <svg>
                                                                            <use href="#svg436509633_693" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="framer-1aopork">
                                                                <div className="framer-1n04h9" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">STEP 8</p>
                                                                </div>
                                                                <div className="framer-9399wl" data-framer-component-type="RichTextContainer">
                                                                    <p className="framer-text">제작</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="framer-fz1nhy">
                                                            <div className="framer-1qh0c3v" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">본문과 표지의 최종 PDF 파일을 확인 후 계약된 사양에 따라 제작이 진행됩니다.</p>
                                                            </div>
                                                            <div className="framer-4oghw9" data-framer-component-type="RichTextContainer">
                                                                <p className="framer-text">-제작은 일반적으로 평일 기준 7일 정도 소요되며 제작 사양에 따라 기간은 변동될 수 있습니다. 인쇄 발주 전에 잔금을 송금하시면 제작 완료 후 계약서에 기재된 주소로 도서를 발송합니다.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="framer-p44x6u" data-framer-name="섹션4: 카톡문의">
                            <div className="framer-1gj7paw">
                                <div className="framer-napbd">
                                    <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                                        <div className="framer-1l0864t" data-framer-component-type="RichTextContainer">
                                            <p className="framer-text">오픈채팅 상담 서비스</p>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                                        <div className="framer-1l0864t" data-framer-component-type="RichTextContainer">
                                            <p className="framer-text">오픈채팅 상담 서비스</p>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                                        <div className="framer-1l0864t" data-framer-component-type="RichTextContainer">
                                            <p className="framer-text">오픈채팅 상담 서비스</p>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                                        <div className="framer-1s4z5hi" data-framer-component-type="RichTextContainer">
                                            <p className="framer-text">문의사항을 작성하여 보내 주시면</p>
                                            <p className="framer-text">업무시간 내에 답변을 남겨 드립니다.</p>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                                        <div className="framer-1s4z5hi" data-framer-component-type="RichTextContainer">
                                            <p className="framer-text">문의사항을 작성하여 보내 주시면</p>
                                            <p className="framer-text">업무시간 내에 답변을 남겨 드립니다.</p>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                                        <div className="framer-1s4z5hi" data-framer-component-type="RichTextContainer">
                                            <p className="framer-text">문의사항을 작성하여 보내 주시면</p>
                                            <p className="framer-text">업무시간 내에 답변을 남겨 드립니다.</p>
                                        </div>
                                    </div>
                                    <div className="framer-wj86vf">
                                        <div className="framer-jyprwi">
                                            <div className="ssr-variant hidden-1vk2m8p">
                                                <div data-framer-component-type="SVG" className="framer-1fq7on5" aria-hidden="true"></div>
                                            </div>
                                            <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                                                <div data-framer-component-type="SVG" className="framer-1fq7on5" aria-hidden="true"></div>
                                            </div>
                                        </div>
                                        <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                                            <div className="framer-14knbo2" data-framer-component-type="RichTextContainer">
                                                <p className="framer-text">카카오톡으로 문의하기</p>
                                            </div>
                                        </div>
                                        <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                                            <div className="framer-14knbo2" data-framer-component-type="RichTextContainer">
                                                <p className="framer-text">카카오톡으로 문의하기</p>
                                            </div>
                                        </div>
                                        <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                                            <div className="framer-14knbo2" data-framer-component-type="RichTextContainer">
                                                <p className="framer-text">카카오톡으로 문의하기</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="framer-jvpix2">
                                    <div className="framer-1rabwf1 hidden-72rtr7 hidden-1vk2m8p" data-framer-component-type="RichTextContainer">
                                        <p className="framer-text">KAKAO</p>
                                        <p className="framer-text">TALK</p>
                                    </div>
                                    <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                                        <div className="framer-1p7cg8r" data-framer-name="Mockupimg">
                                            <div data-framer-background-image-wrapper="true">
                                                <Image decoding="async" loading="lazy" width="1151" height="990" sizes="(max-width: 809.98px) 200px, (min-width: 1200px) 302px, (min-width: 810px) and (max-width: 1199.98px) 206px" src="https://framerusercontent.com/images/rKFMjpUtlHUfssV2M3LZIUXMfA.png?width=1151&amp;height=990" alt="" data-framer-original-sizes="200px" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                                        <div className="framer-1p7cg8r" data-framer-name="Mockupimg">
                                            <div data-framer-background-image-wrapper="true">
                                                <Image decoding="async" loading="lazy" width="1151" height="990" sizes="(max-width: 809.98px) 200px, (min-width: 1200px) 302px, (min-width: 810px) and (max-width: 1199.98px) 206px" src="https://framerusercontent.com/images/rKFMjpUtlHUfssV2M3LZIUXMfA.png?width=1151&amp;height=990" alt="" data-framer-original-sizes="302px" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                                        <div className="framer-1p7cg8r" data-framer-name="Mockupimg">
                                            <div data-framer-background-image-wrapper="true">
                                                <Image decoding="async" loading="lazy" width="1151" height="990" sizes="(max-width: 809.98px) 200px, (min-width: 1200px) 302px, (min-width: 810px) and (max-width: 1199.98px) 206px" src="https://framerusercontent.com/images/rKFMjpUtlHUfssV2M3LZIUXMfA.png?width=1151&amp;height=990" alt="" data-framer-original-sizes="206px" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="framer-74toqi hidden-72rtr7 hidden-xpwx9r" data-framer-component-type="RichTextContainer">
                                        <p className="framer-text">KAKAO</p>
                                        <p className="framer-text">TALK</p>
                                    </div>
                                </div>
                            </div>
                            <div data-framer-component-type="SVG" className="framer-1w5nd7t hidden-1vk2m8p" aria-hidden="true"></div>
                        </div>
                        <div className="framer-ur7txx" data-framer-name="섹션5: 문의하기">
                            <div className="framer-kd1ens">
                                <div className="framer-tvwqul">
                                    <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                                        <div className="framer-zi6tbb" data-framer-component-type="RichTextContainer">
                                            <p className="framer-text">Contact</p>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                                        <div className="framer-zi6tbb" data-framer-component-type="RichTextContainer">
                                            <p className="framer-text">Contact</p>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                                        <div className="framer-zi6tbb" data-framer-component-type="RichTextContainer">
                                            <p className="framer-text">Contact</p>
                                        </div>
                                    </div>
                                    <div className="framer-1kq9tof">
                                        <div className="framer-on49ll">
                                            <div className="framer-1skgo30" data-border="true">
                                                <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                                                    <div className="framer-wgrfs9" data-framer-component-type="RichTextContainer">
                                                        <p className="framer-text">이름 (회사명)</p>
                                                    </div>
                                                </div>
                                                <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                                                    <div className="framer-wgrfs9" data-framer-component-type="RichTextContainer">
                                                        <p className="framer-text">이름 (회사명)</p>
                                                    </div>
                                                </div>
                                                <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                                                    <div className="framer-wgrfs9" data-framer-component-type="RichTextContainer">
                                                        <p className="framer-text">이름 (회사명)</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="framer-11io6m6" data-border="true">
                                                <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                                                    <div className="framer-pu7f4t" data-framer-component-type="RichTextContainer">
                                                        <p className="framer-text">전화번호</p>
                                                    </div>
                                                </div>
                                                <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                                                    <div className="framer-pu7f4t" data-framer-component-type="RichTextContainer">
                                                        <p className="framer-text">전화번호</p>
                                                    </div>
                                                </div>
                                                <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                                                    <div className="framer-pu7f4t" data-framer-component-type="RichTextContainer">
                                                        <p className="framer-text">전화번호</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="framer-12qye4t" data-border="true">
                                                <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                                                    <div className="framer-f4du2" data-framer-component-type="RichTextContainer">
                                                        <p className="framer-text">이메일</p>
                                                    </div>
                                                </div>
                                                <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                                                    <div className="framer-f4du2" data-framer-component-type="RichTextContainer">
                                                        <p className="framer-text">이메일</p>
                                                    </div>
                                                </div>
                                                <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                                                    <div className="framer-f4du2" data-framer-component-type="RichTextContainer">
                                                        <p className="framer-text">이메일</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="framer-zx5tnm" data-border="true">
                                                <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                                                    <div className="framer-v4g9vj" data-framer-component-type="RichTextContainer">
                                                        <p className="framer-text">문의 내용을 상세히 작성해 주세요.</p>
                                                    </div>
                                                </div>
                                                <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                                                    <div className="framer-v4g9vj" data-framer-component-type="RichTextContainer">
                                                        <p className="framer-text">문의 내용을 상세히 작성해 주세요.</p>
                                                    </div>
                                                </div>
                                                <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                                                    <div className="framer-v4g9vj" data-framer-component-type="RichTextContainer">
                                                        <p className="framer-text">문의 내용을 상세히 작성해 주세요.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                                            <div className="framer-k1k810" data-framer-component-type="RichTextContainer">
                                                <p className="framer-text">-외주 편집, 자비 출판 관련 문의</p>
                                                <p className="framer-text">도서 장르, 제목, 원고 (예상) 분량, 원고 완성도, 원고 구성 요소(EX: 텍스트, 사진, 삽화, 도표, 음원 유무 및 대략의 개수) 필수 기재</p>
                                                <p className="framer-text">
                                                    <br className="framer-text trailing-break" />
                                                </p>
                                                <p className="framer-text">-출판 코칭 관련 문의</p>
                                                <p className="framer-text">코칭 목적 (EX: 개인 소장용 도서 출간, 출판사 투고 및 계약 관련, 출판사 취업(창업) 준비 등) 필수 기재</p>
                                            </div>
                                        </div>
                                        <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                                            <div className="framer-k1k810" data-framer-component-type="RichTextContainer">
                                                <p className="framer-text">-외주 편집, 자비 출판 관련 문의</p>
                                                <p className="framer-text">도서 장르, 제목, 원고 (예상) 분량, 원고 완성도, 원고 구성 요소(EX: 텍스트, 사진, 삽화, 도표, 음원 유무 및 대략의 개수) 필수 기재</p>
                                                <p className="framer-text">
                                                    <br className="framer-text trailing-break" />
                                                </p>
                                                <p className="framer-text">-출판 코칭 관련 문의</p>
                                                <p className="framer-text">코칭 목적 (EX: 개인 소장용 도서 출간, 출판사 투고 및 계약 관련, 출판사 취업(창업) 준비 등) 필수 기재</p>
                                            </div>
                                        </div>
                                        <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                                            <div className="framer-k1k810" data-framer-component-type="RichTextContainer">
                                                <p className="framer-text">-외주 편집, 자비 출판 관련 문의</p>
                                                <p className="framer-text">도서 장르, 제목, 원고 (예상) 분량, 원고 완성도, 원고 구성 요소(EX: 텍스트, 사진, 삽화, 도표, 음원 유무 및 대략의 개수) 필수 기재</p>
                                                <p className="framer-text">
                                                    <br className="framer-text trailing-break" />
                                                </p>
                                                <p className="framer-text">-출판 코칭 관련 문의</p>
                                                <p className="framer-text">코칭 목적 (EX: 개인 소장용 도서 출간, 출판사 투고 및 계약 관련, 출판사 취업(창업) 준비 등) 필수 기재</p>
                                            </div>
                                        </div>
                                        <div className="framer-1kzllwq">
                                            <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                                                <div className="framer-1kt4wg0" data-framer-name="문의하기" data-framer-component-type="RichTextContainer">
                                                    <p className="framer-text">출판 상담 문의하기</p>
                                                </div>
                                            </div>
                                            <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                                                <div className="framer-1kt4wg0" data-framer-name="문의하기" data-framer-component-type="RichTextContainer">
                                                    <p className="framer-text">출판 상담 문의하기</p>
                                                </div>
                                            </div>
                                            <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                                                <div className="framer-1kt4wg0" data-framer-name="문의하기" data-framer-component-type="RichTextContainer">
                                                    <p className="framer-text">출판 상담 문의하기</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="framer-l7ydxz" data-framer-name="푸터">
                            <div className="framer-19cclfz">
                                <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                                    <div className="framer-ak7mxe" data-framer-name="로고">
                                        <div data-framer-background-image-wrapper="true">
                                            <Image decoding="async" loading="lazy" width="440" height="356" src="https://framerusercontent.com/images/t5arNqU60IYXffoBly9Qbpeizg.png?width=440&amp;height=356" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                                    <div className="framer-ak7mxe" data-framer-name="로고">
                                        <div data-framer-background-image-wrapper="true">
                                            <Image decoding="async" loading="lazy" width="440" height="356" src="https://framerusercontent.com/images/t5arNqU60IYXffoBly9Qbpeizg.png?width=440&amp;height=356" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                                    <div className="framer-ak7mxe" data-framer-name="로고">
                                        <div data-framer-background-image-wrapper="true">
                                            <Image decoding="async" loading="lazy" width="440" height="356" src="https://framerusercontent.com/images/t5arNqU60IYXffoBly9Qbpeizg.png?width=440&amp;height=356" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="framer-1sideb2">
                                    <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                                        <div className="framer-9t4dgu" data-framer-component-type="RichTextContainer">
                                            <p className="framer-text">홈 | 회사소개 | FAQ | 일랑블로그</p>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                                        <div className="framer-9t4dgu" data-framer-component-type="RichTextContainer">
                                            <p className="framer-text">홈 | 회사소개 | FAQ | 일랑블로그</p>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                                        <div className="framer-9t4dgu" data-framer-component-type="RichTextContainer">
                                            <p className="framer-text">홈 | 회사소개 | FAQ | 일랑블로그</p>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                                        <div className="framer-wqb2io" data-framer-component-type="RichTextContainer">
                                            <p className="framer-text">사업자등록번호 : 119-25-01155</p>
                                            <p className="framer-text">E-mail : yilang2019@naver.com</p>
                                            <p className="framer-text">Location : 서울시 마포구 와우산로 10길</p>
                                            <p className="framer-text">Copyright@2025 Illangbooks. All rights reserved.</p>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                                        <div className="framer-wqb2io" data-framer-component-type="RichTextContainer">
                                            <p className="framer-text">사업자등록번호 : 119-25-01155</p>
                                            <p className="framer-text">E-mail : yilang2019@naver.com</p>
                                            <p className="framer-text">Location : 서울시 마포구 와우산로 10길</p>
                                            <p className="framer-text">Copyright@2025 Illangbooks. All rights reserved.</p>
                                        </div>
                                    </div>
                                    <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                                        <div className="framer-wqb2io" data-framer-component-type="RichTextContainer">
                                            <p className="framer-text">사업자등록번호 : 119-25-01155</p>
                                            <p className="framer-text">E-mail : yilang2019@naver.com</p>
                                            <p className="framer-text">Location : 서울시 마포구 와우산로 10길</p>
                                            <p className="framer-text">Copyright@2025 Illangbooks. All rights reserved.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="framer-5x8ol7" data-framer-name="헤더">
                            <div className="ssr-variant hidden-1vk2m8p hidden-xpwx9r">
                                <a className="framer-sm25a6 framer-lux5qc" data-framer-name="로고" href="./" data-framer-page-link-current="true">
                                    <div data-framer-background-image-wrapper="true">
                                        <Image decoding="async" width="440" height="356" src="https://framerusercontent.com/images/t5arNqU60IYXffoBly9Qbpeizg.png?width=440&amp;height=356" alt="" />
                                    </div>
                                </a>
                            </div>
                            <div className="ssr-variant hidden-xpwx9r hidden-72rtr7">
                                <a className="framer-sm25a6 framer-lux5qc" data-framer-name="로고" href="./" data-framer-page-link-current="true">
                                    <div data-framer-background-image-wrapper="true">
                                        <Image decoding="async" width="440" height="356" src="https://framerusercontent.com/images/t5arNqU60IYXffoBly9Qbpeizg.png?width=440&amp;height=356" alt="" />
                                    </div>
                                </a>
                            </div>
                            <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                                <a className="framer-sm25a6 framer-lux5qc" data-framer-name="로고" href="./" data-framer-page-link-current="true">
                                    <div data-framer-background-image-wrapper="true">
                                        <Image decoding="async" width="440" height="356" src="https://framerusercontent.com/images/t5arNqU60IYXffoBly9Qbpeizg.png?width=440&amp;height=356" alt="" />
                                    </div>
                                </a>
                            </div>
                            <div className="framer-1ynakz9">
                                <div className="framer-1lbz3mg hidden-1vk2m8p" data-framer-name="hambuger" id="1lbz3mg">
                                    <div className="framer-1eyjj2k">
                                        <div data-framer-component-type="SVG" className="framer-tqp9mw" aria-hidden="true"></div>
                                    </div>
                                </div>
                                <div className="ssr-variant hidden-xpwx9r">
                                    <div data-framer-component-type="SVG" className="framer-16p14dq hidden-1vk2m8p" aria-hidden="true">
                                        <div className="svgContainer">
                                            <svg>
                                                <use href="#svg2145075375_1178" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="ssr-variant hidden-1vk2m8p hidden-72rtr7">
                                    <div data-framer-component-type="SVG" className="framer-16p14dq hidden-1vk2m8p" aria-hidden="true">
                                        <div className="svgContainer">
                                            <svg>
                                                <use href="#svg-1870832021_1177" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="framer-glmq52 hidden-72rtr7 hidden-xpwx9r">
                                <div className="framer-1njcwyh hidden-72rtr7" data-framer-component-type="RichTextContainer">
                                    <p className="framer-text">
                                        <a className="framer-text framer-styles-preset-fa0lqh" data-styles-preset="NSj8aKz2Q" href="./회사소개">회사소개</a>
                                    </p>
                                </div>
                                <div className="framer-220atz hidden-72rtr7" data-framer-component-type="RichTextContainer">
                                    <p className="framer-text">
                                        <a className="framer-text framer-styles-preset-fa0lqh" data-styles-preset="NSj8aKz2Q" href="./faq">FAQ</a>
                                    </p>
                                </div>
                                <div className="framer-hok9h4 hidden-72rtr7" data-framer-component-type="RichTextContainer">
                                    <p className="framer-text">일랑블로그</p>
                                </div>
                            </div>
                            <div className="framer-1iv6rq5 hidden-72rtr7 hidden-xpwx9r"></div>
                        </div>
                    </div>
                    <div id="overlay"></div>
                </div>
                <link rel="modulepreload" href="https://framerusercontent.com/sites/5PEV6T37b7TiNOethVqtHp/react.CxCVu0zl.mjs" />
                <link rel="modulepreload" href="https://framerusercontent.com/sites/5PEV6T37b7TiNOethVqtHp/rolldown-runtime.DuUl1Rk5.mjs" />
                <link rel="modulepreload" href="https://framerusercontent.com/sites/5PEV6T37b7TiNOethVqtHp/framer.BvbI8pUV.mjs" />
                <link rel="modulepreload" href="https://framerusercontent.com/sites/5PEV6T37b7TiNOethVqtHp/motion.C4Dp1vC-.mjs" />
                <link rel="modulepreload" href="https://framerusercontent.com/sites/5PEV6T37b7TiNOethVqtHp/0ASTWk-DTQpB66ExIJt6XsOCPWknsCsjyarhSpA6DOw.CMti8bhO.mjs" />
                <link rel="modulepreload" href="https://framerusercontent.com/sites/5PEV6T37b7TiNOethVqtHp/rqmlVMYjy.zZEJ4NAB.mjs" />
                <link rel="modulepreload" href="https://framerusercontent.com/sites/5PEV6T37b7TiNOethVqtHp/shared-lib.DPRJa5hT.mjs" />
                <link rel="modulepreload" href="https://framerusercontent.com/sites/5PEV6T37b7TiNOethVqtHp/augiA20Il.CazmsXIq.mjs" />
                <link rel="modulepreload" href="https://framerusercontent.com/sites/5PEV6T37b7TiNOethVqtHp/script_main.CkRkbLLM.mjs" />
                {/* <script type="module" async data-framer-bundle="main" src="https://framerusercontent.com/sites/5PEV6T37b7TiNOethVqtHp/script_main.CkRkbLLM.mjs"></script> */}
                {SvgTemplates}
            </body>
        </html>

    );
}
