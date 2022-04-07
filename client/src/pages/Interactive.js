import React from "react";
import gsap from "gsap";
import { Helmet } from "react-helmet";
 
function Interactive() {
    let animation;
    let isButtonADisabled = true;
    let isButtonBDisabled = true;

    gsap.set("#A1, #A2, #B1, #B2, #P, #Solb, #Sola", { opacity: 0 });
    gsap.set("#A, #B, #Stop, #Start", { opacity: 0.7 });

    function stagea1() {
        let extenda1 = gsap.timeline({ defaults: { ease: "none" } }),
        speed = 40;
        extenda1
            .to("#Rod", {
                x: 200,
                duration: Math.abs(200 - gsap.getProperty("#Rod", "x")) / speed,
            })
            .to("#Start, #A", { opacity: 1 }, "<")
            .to("#Stop, #B", { opacity: 0.7 }, "<")
            .to("#Arrow", { y: 0, duration: 0.1 }, "<")
            .to("#VCenter", { x: -75.64, duration: 0.1 }, "<")
            .to("#Sola", { opacity: 1 }, "<")
            .to("#P, #B1, #B2, #A2, #Solb", { opacity: 0 }, "<")
            .to("#A1", { opacity: 1 }, "<")
            .to("#A1", { opacity: 0 }, "+=0.1")
            .to("#A2", { opacity: 1 }, "<")
            .to("#Arrow", { y: -15, ease: "none" }, "<")
            .to("#A2", { opacity: 0 }, "+=1")
            .to("#VCenter", { x: 0, duration: 0.1 }, "<")
            .to("#Sola", { opacity: 0 }, "<")
            .to("#P", { opacity: 1 }, "<")
            .to("#A", { opacity: 0.7 });
        return extenda1;
    }

    function stagea2() {
        let extenda2 = gsap.timeline({ defaults: { ease: "none" } }),
        speed = 40;
        extenda2
            .to("#P, #B1, #B2, #A1, #solb", { opacity: 0 })
            .to("#Start, #A", { opacity: 1 }, "<")
            .to("#Stop, #B", { opacity: 0.7 }, "<")
            .to("#VCenter", { x: -75.64, duration: 0.1 }, "<")
            .to("#Sola", { opacity: 1 }, "<")
            .to("#A2", { opacity: 1, duration: 1 }, "<")
            .to("#A2", { opacity: 0 }, "+=1")
            .to("#Sola", { opacity: 0 }, "<")
            .to("#VCenter", { x: 0, duration: 0.1 }, "<")
            .to("#Arrow", { y: -15, duration: 0.1 }, "<")
            .to("#P", { opacity: 1 }, "<")
            .to("#A", { opacity: 0.7 });
        return extenda2;
    }

    function stageb1() {
        let retractb1 = gsap.timeline({ defaults: { ease: "none" } }),
        speed = 50;
        retractb1
            .to("#Rod", {
            x: 0,
            duration: Math.abs(0 - gsap.getProperty("#Rod", "x")) / speed,
            })
            .to("#Start, #B", { opacity: 1 }, "<")
            .to("#Stop, #A", { opacity: 0.7 }, "<")
            .to("#Arrow", { y: 0, duration: 0.1 }, "<")
            .to("#VCenter", { x: 75.64, duration: 0.1 }, "<")
            .to("#Solb", { opacity: 1 }, "<")
            .to("#P, #A1, #A2, #B2, #Sola", { opacity: 0 }, "<")
            .to("#B1", { opacity: 1 }, "<")
            .to("#B1", { opacity: 0 }, "+=0.1")
            .to("#B2", { opacity: 1 }, "<")
            .to("#Arrow", { y: -15 }, "<")
            .to("#B2", { opacity: 0 }, "+=1")
            .to("#VCenter", { x: 0, duration: 0.1 }, "<")
            .to("#Solb", { opacity: 0 }, "<")
            .to("#P", { opacity: 1 }, "<")
            .to("#Solb", { opacity: 0 }, "<")
            .to("#B", { opacity: 0.7 }, "<");
        return retractb1;
    }

    function stageb2() {
        let retractb2 = gsap.timeline({ defaults: { ease: "none" } }),
        speed = 50;
        retractb2
            .to("#P, #A1, #A2, #B1, #Sola", { opacity: 0 })
            .to("#B2", { opacity: 1, duration: 1, ease: "none" }, "<")
            .to("#B, #Start", { opacity: 1 }, "<")
            .to("#A, #Stop", { opacity: 0.7 }, "<")
            .to("#Solb", { opacity: 1, duration: 1, ease: "none" }, "<")
            .to("#VCenter", { x: 75.64, duration: 0.1 }, "<")
            .to("#B2", { opacity: 0, ease: "none" }, "+=0.1")
            .to("#Solb", { opacity: 0 }, "<")
            .to("#VCenter", { x: 0, duration: 0.1 }, "<")
            .to("#Arrow", { y: -15, duration: 0.1 }, "<")
            .to("#B", { opacity: 0.7 }, "<")
            .to("#P", { opacity: 1, ease: "none" }, "<");
        return retractb2;
    }

    function stagestart() {
        let start1 = gsap.timeline({
            defaults: { ease: "none" },
        });
        start1
            .to("#A1, #A2, #B1, #B2", { opacity: 0 })
            .to("#P, #Start", { opacity: 1 }, "<")
            .to("#Stop", { opacity: 0.7 })
            .to("#Arrow", { y: -15, duration: 0.1 }, "<");

        return start1;
    }

    function stagestop() {
        let stop1 = gsap.timeline({
            defaults: { ease: "none" },
        });
        stop1
            .to("#A1, #A2, #B1, #B2, #P, #Sola, #Solb", { opacity: 0 })
            .to("#A, #B, #Start", { opacity: 0.7 })
            .to("#Stop", { opacity: 1 })
            .to("#Arrow, #VCenter", { y: 0, x: 0, duration: 0.1 }, "<");
        return stop1;
    }

    let btna = () => {
        if (isButtonADisabled) return;
        if (gsap.getProperty("#Rod", "x") < 200) {
            if (animation) animation.kill();
            animation = stagea1();
        } else if (gsap.getProperty("#Rod", "x")===200) {
            if (animation) animation.kill();
            animation = stagea2();
        }
    };

    let btnb = () => {
        if (isButtonBDisabled) return;
        if (gsap.getProperty("#Rod", "x") > 0) {
            if (animation) animation.kill();
            animation = stageb1();
        } else if (gsap.getProperty("#Rod", "x")===0) {
            if (animation) animation.kill();
            animation = stageb2();
        }
    };

    let btnstop = () => {
        if (animation) animation.kill();
        animation = stagestop();
        isButtonBDisabled = true;
        isButtonADisabled = true;
    };

    let btnstart = () => {
        isButtonBDisabled = false;
        isButtonADisabled = false;

        if (!animation || animation.isActive() === false) {
            animation = stagestart();
        }
    };

    return (
        <>
            <Helmet>
                <title>TU- Technical Union | Interactive hydraulic animation</title>

                <meta
                name="description"
                content="Interactive animation of a simple hydraulic circuit."
                />
                <meta
                name="keywords"
                content="hydraulic, circuit, interactive, animation"
                />
                <meta name="author" content="Edgar Lindo" />

                <meta
                property="og:title"
                content=" Technical Union Interactive hydraulic circuits"
                />
                <meta
                property="og:description"
                content="Simple hydraulic circuit animation"
                />
                <meta
                property="og:image"
                content="./Images/oppictures/interactive.png"
                />
                <meta property="og:url" content="http://www.tu.biz/Interactive" />

            </Helmet>

            <div className="row">
                <div className="col-md-6">
                    {/* style="enable-background: new 0 0 1218 1048" ADD CSS TO SVG ELEMENT BELOW */}
                    <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        // xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 1218 1048"
                        // style="enable-background: new 0 0 1218 1048"
                        // xml:space="preserve"
                    >
                        <g id="Tank" className="st0">
                            <g>
                                <polyline
                                    className="st1"
                                    points="350.4,407.5 350.4,437.9 426.5,437.9 426.5,407.5 		"
                                ></polyline>
                            </g>

                            <line
                                className="st1"
                                x1="388.5"
                                y1="377.1"
                                x2="388.5"
                                y2="437.9"
                            ></line>
                        </g>

                        <g id="Suction_Filter_with_bypass">
                            <g id="Filter">
                                <polygon
                                    className="st1"
                                    points="372.6,1006.5 334.5,983.7 372.6,960.8 410.6,983.7 		"
                                ></polygon>
                                <g>
                                    <g>
                                        <line
                                            className="st1"
                                            x1="372.6"
                                            y1="960.8"
                                            x2="372.6"
                                            y2="968.3"
                                        ></line>
                                        <line
                                            className="st2"
                                            x1="372.6"
                                            y1="978.6"
                                            x2="372.6"
                                            y2="993.9"
                                        ></line>
                                        <line
                                            className="st1"
                                            x1="372.6"
                                            y1="999"
                                            x2="372.6"
                                            y2="1006.5"
                                        ></line>
                                    </g>
                                </g>
                            </g>

                            <g id="Check_Valve">
                                <circle className="st1" cx="374.8" cy="944.3" r="7.6"></circle>
                                <g>
                                    <line
                                        className="st1"
                                        x1="392.2"
                                        y1="944.3"
                                        x2="380.1"
                                        y2="954.4"
                                    ></line>

                                    <line
                                        className="st1"
                                        x1="392.2"
                                        y1="944.3"
                                        x2="380.1"
                                        y2="934.3"
                                    ></line>
                                </g>
                                <polyline
                                    className="st1"
                                    points="365.8,948.6 361.5,940.1 357.5,948.6 353.4,940.1 349,948.6 		"
                                ></polyline>
                            </g>

                            <line
                                className="st1"
                                x1="296.2"
                                y1="983.7"
                                x2="333.4"
                                y2="983.7"
                            ></line>

                            <path className="st1" d="M412.7,983.7c0.2-0.5,36.2,0,36.2,0"></path>
                            
                            <polyline
                                className="st3"
                                points="311.4,983.7 311.4,944.4 347.5,944.4 	"
                            ></polyline>

                            <polyline
                                className="st3"
                                points="392.7,944.3 433.2,944.3 433.2,982.5 	"
                            ></polyline>
                            
                            <circle id="Dot" className="st4" cx="311.4" cy="983.5" r="1.7"></circle>
                            
                            <circle
                                id="Dot_00000018222943719003942890000004413606129045801355_"
                                className="st4"
                                cx="433.2"
                                cy="983.7"
                                r="1.7"
                            ></circle>
                        </g>

                        <g id="Tank_Big">
                            <polyline
                                className="st1"
                                points="204,919.8 204,1026.5 478.2,1026.5 478.2,924.2 	"
                            ></polyline>
                        </g>

                        <g id="Pump_Motor_Group">
                            <g id="Pump">
                                <circle className="st1" cx="282.2" cy="800.5" r="76.1"></circle>
                                <polygon
                                    className="st5"
                                    points="280,730.2 260.2,764.4 299.8,764.4 		"
                                ></polygon>
                            </g>

                            <g id="Motor">
                                <circle className="st1" cx="93.2" cy="800.5" r="76.1"></circle>
                                <text transform="matrix(1 0 0 1 56.542 827.2842)" className="st6 st7">
                                    M
                                </text>
                            </g>

                            <line
                                className="st1"
                                x1="169.3"
                                y1="800.5"
                                x2="206.1"
                                y2="800.5"
                            ></line>
                        </g>

                        <g id="Lines_Skeleton">
                            <polyline
                                className="st1"
                                points="280,722.7 280,647.3 280.1,342.6 	"
                            ></polyline>

                            <line className="st1" x1="387.1" y1="647.3" x2="280" y2="647.3"></line>
                            <polyline
                                className="st1"
                                points="325.8,345 325.8,374.5 388.5,374.5 	"
                            ></polyline>

                            <polyline
                                className="st1"
                                points="280,878.6 280,983.7 295.2,983.7 	"
                            ></polyline>

                            <polyline
                                className="st1"
                                points="143.2,118.3 143.2,145.3 280,145.3 280,262.1 	"
                            ></polyline>

                            <polyline
                                className="st1"
                                points="417.1,118.3 417.1,147.5 326.2,147.5 325.8,262.1 	"
                            ></polyline>

                            <circle className="st5" cx="280" cy="647.3" r="5.7"></circle>
                        </g>

                        <g id="Valve_Body">
                            <polyline
                                className="st8"
                                points="159.7,341 144.2,310.6 128.9,341 113.7,310.6 	"
                            ></polyline>

                            <polyline
                                className="st8"
                                points="446.6,341 461.9,310.6 477.1,341 492.3,310.6 	"
                            ></polyline>

                            <g>
                                <polyline
                                    className="st8"
                                    points="446.6,264.9 492.3,264.9 492.3,295.3 446.6,295.3 		"
                                ></polyline>

                                <path
                                    className="st8"
                                    d="M446.6,295.3c15.2-10.1,30.4-20.3,45.7-30.4"
                                ></path>
                            </g>

                            <g>
                                <polygon
                                    className="st8"
                                    points="159.4,265 113.7,264.9 113.7,295.3 159.4,295.3 		"
                                ></polygon>
                                <line
                                    className="st8"
                                    x1="159.4"
                                    y1="295.3"
                                    x2="113.7"
                                    y2="264.9"
                                ></line>
                            </g>

                            <rect
                                x="159.9"
                                y="265"
                                className="st8"
                                width="285.6"
                                height="76.1"
                            ></rect>
                        </g>
                        <g id="VCenter">
                            <path className="st3" d="M350.7,306.9"></path>
                            <rect
                                x="341.1"
                                y="264.9"
                                className="st9"
                                width="76.1"
                                height="76.1"
                            ></rect>

                            <g>
                                <line
                                    className="st10"
                                    x1="356.4"
                                    y1="266.8"
                                    x2="356.4"
                                    y2="338.8"
                                ></line>

                                <g>
                                    <line
                                        className="st8"
                                        x1="356.4"
                                        y1="278.3"
                                        x2="356.4"
                                        y2="338.8"
                                    ></line>

                                    <g>
                                        <polygon
                                            points="348.4,280.6 356.4,266.8 364.3,280.6 				"
                                        ></polygon>
                                    </g>
                                </g>
                            </g>

                            <g>
                                <g>
                                    <line
                                        className="st8"
                                        x1="401.9"
                                        y1="266.2"
                                        x2="401.9"
                                        y2="327.9"
                                    ></line>

                                    <g>
                                        <polygon
                                            points="393.9,325.6 401.9,339.4 409.8,325.6 				"
                                        ></polygon>
                                    </g>
                                </g>
                            </g>

                            <polygon
                                className="st9"
                                points="265.3,341 189.2,341 188.9,265 265.3,264.9 	"
                            ></polygon>

                            <g>
                                <g>
                                    <line
                                        className="st8"
                                        x1="204.1"
                                        y1="341.1"
                                        x2="243.7"
                                        y2="276.8"
                                    ></line>

                                    <g>
                                        <polygon points="249.3,283 249.8,267 235.7,274.6 				"></polygon>
                                    </g>
                                </g>
                            </g>

                            <g>
                                <g>
                                    <line
                                        className="st8"
                                        x1="204.3"
                                        y1="267"
                                        x2="243.7"
                                        y2="330.8"
                                    ></line>

                                    <g>
                                        <polygon
                                            points="235.7,333 249.8,340.5 249.3,324.6 				"
                                        ></polygon>
                                    </g>
                                </g>
                            </g>

                            <g id="Center_Closed">
                                <rect
                                    x="265"
                                    y="264.9"
                                    className="st9"
                                    width="76.1"
                                    height="76.1"
                                ></rect>

                                <g>
                                    <line
                                        className="st8"
                                        x1="280.1"
                                        y1="265.6"
                                        x2="280.1"
                                        y2="292.2"
                                    ></line>

                                    <line
                                        className="st8"
                                        x1="272.5"
                                        y1="292.1"
                                        x2="287.7"
                                        y2="292.2"
                                    ></line>
                                </g>
                                <g>
                                    <line
                                        className="st8"
                                        x1="325.9"
                                        y1="265.6"
                                        x2="325.9"
                                        y2="292.2"
                                    ></line>

                                    <line
                                        className="st8"
                                        x1="318.3"
                                        y1="292.1"
                                        x2="333.5"
                                        y2="292.2"
                                    ></line>
                                </g>

                                <g>
                                    <line
                                        className="st8"
                                        x1="325.9"
                                        y1="313.8"
                                        x2="325.7"
                                        y2="340.4"
                                    ></line>

                                    <line
                                        className="st8"
                                        x1="333.5"
                                        y1="313.9"
                                        x2="318.3"
                                        y2="313.7"
                                    ></line>
                                </g>

                                <g>
                                    <line
                                        className="st8"
                                        x1="280.3"
                                        y1="340.4"
                                        x2="280.5"
                                        y2="313.7"
                                    ></line>
                                    <line
                                        className="st8"
                                        x1="288.1"
                                        y1="313.9"
                                        x2="272.9"
                                        y2="313.7"
                                    ></line>
                                </g>
                            </g>
                        </g>

                        <g id="Relief_Valve">
                            <rect
                                x="449.6"
                                y="602.1"
                                className="st1"
                                width="76.1"
                                height="76.1"
                            ></rect>

                            <g id="Arrow">
                                <g>
                                    <line
                                        className="st1"
                                        x1="449.6"
                                        y1="663"
                                        x2="513.1"
                                        y2="663"
                                    ></line>

                                    <g>
                                        <polygon points="510.7,671 524.5,663 510.7,655 				"></polygon>
                                    </g>
                                </g>
                            </g>

                            <polyline
                                className="st1"
                                points="525.7,647.3 571.2,647.3 571.2,708.2 540.6,708.2 540.6,693.2 	"
                            ></polyline>

                            <polyline
                                className="st1"
                                points="601.7,692.9 601.7,708.2 571.2,708.2 	"
                            ></polyline>

                            <g id="Dashed_Line">
                                <g>
                                    <line
                                        className="st1"
                                        x1="418.3"
                                        y1="647.3"
                                        x2="418.3"
                                        y2="654.8"
                                    ></line>

                                    <line
                                        className="st11"
                                        x1="418.3"
                                        y1="670.1"
                                        x2="418.3"
                                        y2="693"
                                    ></line>

                                    <polyline
                                        className="st1"
                                        points="418.3,700.7 418.3,708.2 425.8,708.2 			"
                                    ></polyline>

                                    <line
                                        className="st12"
                                        x1="438.1"
                                        y1="708.2"
                                        x2="481"
                                        y2="708.2"
                                    ></line>
                                    
                                    <polyline
                                        className="st1"
                                        points="487.1,708.2 494.6,708.2 494.6,700.7 			"
                                    ></polyline>
                                    
                                    <line
                                        className="st1"
                                        x1="494.6"
                                        y1="685.7"
                                        x2="494.6"
                                        y2="678.2"
                                    ></line>
                                </g>
                            </g>

                            <g>
                                <line x1="465.2" y1="600.6" x2="490.2" y2="564.2"></line>
                                
                                <g>
                                    <line
                                    className="st1"
                                    x1="465.2"
                                    y1="600.6"
                                    x2="483.7"
                                    y2="573.7"
                                    ></line>
                                
                                    <g>
                                        <polygon
                                            points="488.9,580.1 490.2,564.2 475.8,571.1 				"
                                        ></polygon>
                                    </g>
                                </g>
                            </g>

                            <polyline
                                className="st1"
                                points="479.1,573.8 483.9,589.3 469.3,583.6 474.1,599.1 459.1,593.8 	"
                            ></polyline>
                            
                            <circle className="st13" cx="418.3" cy="647.3" r="3.8"></circle>
                            
                            <polyline
                                className="st1"
                                points="388.5,647.3 446.5,647.3 448.1,647.3 	"
                            ></polyline>
                        </g>
                        
                        <g id="Cylinder">
                            <rect
                                x="128.1"
                                y="39"
                                className="st1"
                                width="303.8"
                                height="76.4"
                            ></rect>
                        
                            <g id="Rod">
                                <line className="st1" x1="174.5" y1="39.4" x2="174.5" y2="115"></line>
                                <line className="st1" x1="174.5" y1="77.2" x2="478" y2="77.2"></line>
                            </g>
                        </g>
                        <g id="B2" className="st0">
                            <polyline
                                className="st14"
                                points="280,714.6 280,647.3 280.1,350.9 	"
                            ></polyline>
                        
                            <polyline
                                className="st14"
                                points="440,647.3 418.3,647.3 280,647.3 	"
                            ></polyline>
                        
                            <polyline
                                className="st14"
                                points="418.3,647.3 418.3,708.2 494.6,708.2 494.6,687.7 	"
                            ></polyline>
                        
                            <polyline
                                className="st15"
                                points="535.2,647.3 571.2,647.3 571.2,698.3 	"
                            ></polyline>
                        
                            <polyline
                                className="st14"
                                points="280.3,340.4 325.9,265.6 326.2,147.5 417.1,147.5 417.1,125 	"
                            ></polyline>
                        </g>
                        
                        <g id="B1" className="st0">
                            <polyline
                                className="st14"
                                points="280,714.6 280,647.3 280.1,350.9 	"
                            ></polyline>
                        
                            <polyline
                                className="st14"
                                points="440,647.3 418.3,647.3 280,647.3 	"
                            ></polyline>
                        
                            <polyline
                                className="st14"
                                points="418.3,647.3 418.3,708.2 494.6,708.2 494.6,687.7 	"
                            ></polyline>
                        
                            <polyline
                                className="st15"
                                points="143.2,125 143.2,145.3 280,145.3 280,263 325.7,338.8 325.8,374.5 386.3,374.5 388.5,374.5 
                                388.5,428.6 	"
                            ></polyline>
                        
                            <polyline
                                className="st14"
                                points="280.3,340.4 325.9,265.6 326.2,147.5 417.1,147.5 417.1,125 	"
                            ></polyline>
                        </g>
                        <g id="A2" className="st0">
                            <polyline
                                className="st14"
                                points="280,255.5 280.1,145 143.2,145 143.2,124.8 	"
                            ></polyline>
                        
                            <line className="st14" x1="280" y1="270.7" x2="280.5" y2="335.6"></line>
                        
                            <g
                                id="_x2B__Pump_Start_00000160153103951055787410000008783436106106307764_"
                            >
                                <polyline
                                    className="st14"
                                    points="280,714.6 280,647.3 280.1,350.9 		"
                                ></polyline>
                                
                                <polyline
                                    className="st14"
                                    points="440,647.3 418.3,647.3 280,647.3 		"
                                ></polyline>
                                
                                <polyline
                                    className="st14"
                                    points="418.3,647.3 418.3,708.2 494.6,708.2 494.6,687.7 		"
                                ></polyline>
                                
                                <polyline
                                    className="st15"
                                    points="535.2,647.3 571.2,647.3 571.2,698.3 		"
                                ></polyline>
                            </g>
                        </g>

                        <g id="A1" className="st0">
                            <polyline
                                className="st14"
                                points="280,714.6 280,647.3 280.1,350.9 	"
                            ></polyline>
                        
                            <polyline
                                className="st14"
                                points="440,647.3 418.3,647.3 280,647.3 	"
                            ></polyline>
                        
                            <polyline
                                className="st14"
                                points="418.3,647.3 418.3,708.2 494.6,708.2 494.6,687.7 	"
                            ></polyline>
                        
                            <polyline
                                className="st14"
                                points="280,255.5 280.1,145 143.2,145 143.2,124.8 	"
                            ></polyline>
                        
                            <polyline
                                className="st15"
                                points="325.8,350.2 325.8,374.5 388.5,374.5 388.5,428.5 	"
                            ></polyline>
                        
                            <polyline
                                className="st15"
                                points="325.8,255.5 326.2,147.5 417.1,147.5 417.1,124.8 	"
                            ></polyline>
                        
                            <line className="st14" x1="280" y1="270.7" x2="280.5" y2="335.6"></line>
                        
                            <line
                                className="st15"
                                x1="325.7"
                                y1="270.5"
                                x2="326.3"
                                y2="335.4"
                            ></line>
                        </g>
                        
                        <g id="P" className="st0">
                            <polyline
                                className="st14"
                                points="280,714.6 280,647.3 280.1,350.9 	"
                            ></polyline>
                        
                            <polyline
                                className="st14"
                                points="440,647.3 418.3,647.3 280,647.3 	"
                            ></polyline>
                        
                            <polyline
                                className="st14"
                                points="418.3,647.3 418.3,708.2 494.6,708.2 494.6,687.7 	"
                            ></polyline>
                        
                            <polyline
                                className="st15"
                                points="535.2,647.3 571.2,647.3 571.2,698.3 	"
                            ></polyline>
                        </g>
                        
                        <g id="Solb">
                            <polygon
                                id="shock"
                                className="st16"
                                points="99.6,207.8 103.8,223.3 41.4,214.9 87.7,205.2 83.4,189.1 146,201.1 	"
                            ></polygon>
                        
                            <text transform="matrix(1 0 0 1 55.0684 257.6738)" className="st6 st17">
                                Sol. B
                            </text>
                        </g>
                        
                        <g id="Sola">
                            <text
                                transform="matrix(1 0 0 1 473.6934 255.8369)"
                                className="st6 st18"
                            >
                               Sol. A
                            </text>
                        
                            <polygon
                                id="shock_00000176012856458431965320000005046700626864642745_"
                                className="st16"
                                points="513.3,206.2 516.9,219.6 
                                462.9,212.4 503,203.9 499.3,190 553.5,200.4 	"
                            ></polygon>
                        </g>
                        
                        <g id="Stop" onClick={btnstop}>
                            <rect
                                x="804.1"
                                y="843.5"
                                className="st19"
                                width="170"
                                height="65"
                            ></rect>
                        
                            <text
                                transform="matrix(1 0 0 1 840.8122 890.6669)"
                                className="st20 st6 st21"
                            >
                                Stop
                            </text>
                        
                            <rect
                                x="803"
                                y="843.5"
                                className="st22"
                                width="172.3"
                                height="65"
                            ></rect>
                        </g>
                        
                        <g id="Start" onClick={btnstart}>
                            <rect
                                x="804.4"
                                y="747.7"
                                className="st23"
                                width="170"
                                height="65"
                            ></rect>
                        
                            <text transform="matrix(1 0 0 1 839.7457 794.864)" className="st6 st21">
                                Start
                            </text>
                        
                            <rect
                                x="803.2"
                                y="747.7"
                                className="st22"
                                width="172.3"
                                height="65"
                            ></rect>
                        </g>
                        
                        <g id="B" onClick={btnb}>
                            <rect
                                x="1021.3"
                                y="844.4"
                                className="st23"
                                width="170"
                                height="65"
                            ></rect>
                        
                            <text
                                transform="matrix(1 0 0 1 1050.499 891.5328)"
                                className="st6 st21"
                            >
                                Sol B.
                            </text>
                        
                            <rect
                                x="1020.1"
                                y="844.4"
                                className="st22"
                                width="172.3"
                                height="65"
                            ></rect>
                        </g>
                        
                        <g id="A" onClick={btna}>
                            <rect
                                x="1021.3"
                                y="744.4"
                                className="st23"
                                width="170"
                                height="65"
                            ></rect>
                        
                            <text
                                transform="matrix(1 0 0 1 1048.3792 791.5932)"
                                className="st6 st21"
                            >
                                Sol A.
                            </text>
                        
                            <rect
                                x="1020.1"
                                y="744.4"
                                className="st22"
                                width="172.3"
                                height="65"
                            ></rect>
                        </g>
                        
                        <text transform="matrix(1 0 0 1 861.7286 999.2109)" className="st6 st24">
                            Developed by Edgar Lindo
                        </text>
                    </svg>
                </div>

                <div className="col-md-6">
                    <p>
                        Simulation of a simple hydraulic circuit for cylinder extension and
                        retraction using a fixed displacement pump and a closed center
                        directional control valve.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Interactive;