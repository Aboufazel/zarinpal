import {Col, Container, Offcanvas, Row} from "react-bootstrap";
import pay from "../../assets/pics/pg.svg"
import "./SecondaryBlock.style.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faBars} from "@fortawesome/free-solid-svg-icons";
import social from '../../assets/pics/social-image.svg';
import zarinCard from '../../assets/pics/zarincard .svg';
import payout from '../../assets/pics/payout.svg';
import zarinPlus from '../../assets/pics/zarinplus.svg';
import verified from '../../assets/pics/verifiedIcon.svg';
import support  from '../../assets/pics/support.svg';
import splite  from '../../assets/pics/splite.svg';
import Logo from "../../assets/pics/logo-white.svg";
import DesktopMenu from "../DesktopMenu/DesktopMenu";
import {useState} from "react";
import BlueBox from "../blueBox/BlueBox";



const SecondaryBlock = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return(
       <div className={'w-100 h-100'} style={{backgroundColor:"white"}}>
           <Container dir={'rtl'}>
               <Row className={'menu_Block'}>
                   <Offcanvas placement={"top"} show={show} onHide={handleClose}>
                       <Offcanvas.Header closeButton>
                       </Offcanvas.Header>
                       <Row className={'menu_Block'}>
                           <Col xs={12}>
                               <ul>
                                   <li>{"تعرفه‌ها"}</li>
                                   <li>{"اپلیکیشن"}</li>
                                   <li className={'divider'}></li>
                                   <li>{"سوالات متداول"}</li>
                                   <li>{"محصولات"}</li>
                                   <li>{"تماس با ما"}</li>
                               </ul>
                           </Col>
                           <Row className={'zarin_block'}>
                               <Col xs={7}>
                                   <a href={'/login'} className={'zarin_btn'}>
                                       {"زرین‌پال من"}
                                       <FontAwesomeIcon icon={faArrowLeft}/>
                                   </a>
                               </Col>
                           </Row>
                       </Row>
                   </Offcanvas>
               </Row>
               <Row className={'header_block'}>
                   <Col className={'header_right_block text-md-start'} sm={4} xs={6}>
                       <a href={'#'}>
                           <img src={Logo} alt={"Logo"}/>
                       </a>
                   </Col>
                   <Col className={'header_left_block'} sm={8} xs={6}>
                       <div className={'d-sm-none'} style={{backgroundColor:'none'}} onClick={handleShow} >
                           <FontAwesomeIcon icon={faBars}/>
                       </div>
                       <div className={'d-sm-block d-none'}>
                           <DesktopMenu/>
                       </div>
                   </Col>
               </Row>
               <BlueBox/>
               <Row id={'first_block'} className={'margin_top70 margin_bottom75'}>
                   <Col lg={6} md={12} className={'d-none d-lg-block d-md-block'}>
                       <div className={'d-flex justify-content-center pic_block'}>
                           <img src={pay} alt={'pay'}/>
                       </div>
                   </Col>
                   <Col className={'content_block'} lg={6} md={12} sm={12}>
                       <div className={'pt-4 d-flex flex-column margin40 text-sm-justify justify-content-center'}>
                           <h2>
                               {'درگاه پرداخت اینترنتی'}
                           </h2>
                           <div className={'content_block_title'}>
                               <h2>
                                   {'مهندسی شده برای رشد و فروش بیشتر'}
                               </h2>
                               <p>
                                   {'درگاه پرداخت زرین‌پال، با اتصالِ همزمان به درگاه‌های متنوع و معتبر بانکی(PSPها)،کاربران را به سریع‌ترین و مطمئن‌ترین درگاه بانکی منتقل می‌کند و به واسطه‌ی قابلیت مسیردهی هوشمند، باعث افزایش درصد تراکنش‌های موفق می‌شود.'}
                               </p>
                           </div>
                           <Row className={'mb-3'}>
                               <Col md={12} className={''}>
                                   <div className={'golden_btn'}>
                                       {'ساخت درگاه پرداخت'}
                                   </div>
                                   <div className={'read_more_btn'}>
                                       {'بیشتر بدانید.'}
                                       <FontAwesomeIcon className={'icon'} icon={faArrowLeft}/>
                                   </div>
                               </Col>
                           </Row>
                       </div>
                   </Col>
               </Row>
               <Row className={'margin_top70 margin_bottom75'}>
                   <Col lg={6} md={12} className={'content_block d-none d-lg-block d-md-block'}>
                       <div className={'pt-5 margin40 d-flex flex-column text-sm-justify justify-content-center'}>
                           <h2>
                               {'زرین لینک'}
                           </h2>
                           <div className={'content_block_title'}>
                               <h2 style={{fontWeight:"bold"}}>
                                   {'پرداخت در شبکه های اجتماعی'}
                               </h2>
                               <p>
                                   {'زرین‌لینک با مدیریت فرآیند فروش به روشی هوشمندانه و سریع، باعث افزایش فروش محصولات و خدمات، از طریق شبکه‌های اجتماعی یا وب‌سایت می‌شود.'}
                               </p>
                           </div>
                           <Row className={'mb-3'}>
                               <Col md={12} className={''}>
                                   <div className={'golden_btn'}>
                                       {'ساخت درگاه پرداخت'}
                                   </div>
                                   <div className={'read_more_btn'}>
                                       {'بیشتر بدانید.'}
                                       <FontAwesomeIcon className={'icon'} icon={faArrowLeft}/>
                                   </div>
                               </Col>
                           </Row>
                       </div>
                   </Col>
                   <Col lg={6} md={12} sm={12} className={'d-none d-lg-block d-md-block'}>
                       <div className={'social_block d-flex justify-content-center'}>
                           <img src={social} alt={'social'}/>
                       </div>
                   </Col>
               </Row>
               <Row className={'margin_top70 margin_bottom75'}>
                   <Col lg={6} md={12} className={'d-none d-lg-block d-md-block'}>
                       <div className={'d-flex justify-content-center zarin_card'}>
                           <img src={zarinCard} alt={'zarin'}/>
                       </div>
                   </Col>
                   <Col className={'content_block'} lg={6} md={12} sm={12}>
                       <div className={'margin40 d-flex flex-column text-sm-justify justify-content-center'}>
                           <h2>
                               {'زرین کارت'}
                           </h2>
                           <div className={'content_block_title'}>
                               <h2>
                                   {'طلایی‌ترین کارتِ بانکی'}
                               </h2>
                               <p>
                                   {'زرین‌‌کارت یک کارتِ بانکی عضو شبکه‌‌ی شتاب و متصل به یک حساب بانکی است که از تمام ویژگی‌‌ها و امکانات یک حساب بانکی تمام عیار برخوردار است. زرین‌‌کارت این امکان را برای کاربران خود فراهم می‌‌سازد تا از تعرفه‌‌ی کارمزد کم‌‌تر در روزهای عادی و کارمزد رایگان در سه‌‌شنبه‌‌های طلاییِ زرین‌‌پال بهره‌‌مند شوند.'}
                               </p>
                           </div>
                           <Row className={'mb-3'}>
                               <Col md={12} className={''}>
                                   <div className={'golden_btn'}>
                                       {'درخواست زرین کارت'}
                                   </div>
                                   <div className={'read_more_btn'}>
                                       {'بیشتر بدانید.'}
                                       <FontAwesomeIcon className={'icon'} icon={faArrowLeft}/>
                                   </div>
                               </Col>
                           </Row>
                       </div>
                   </Col>
               </Row>
               <Row className={'margin_top70 margin_bottom75'}>
                   <Col lg={6} md={12} className={'content_block d-none d-lg-block d-md-block'}>
                       <div className={'margin100 d-flex flex-column text-sm-justify justify-content-center'}>
                           <h2>
                               {'تسهیم'}
                           </h2>
                           <div className={'content_block_title'}>
                               <h2>
                                   {'درگاه پرداخت اشتراکی'}
                               </h2>
                               <p>
                                   {'تسهیم بهترین روش برای مدیریت مالی کسب‌ و کارهای شراکتی است که به واسطه‌ی آن، درآمد حاصل از فروش محصولات یا خدمات، در سهم‌های ثابت یا متغیر میان شرکای تجاری تقسیم شده و به صورت جداگانه به حساب هر شخص واریز می‌‌شود.'}
                               </p>
                           </div>
                           <Row className={'mb-3'}>
                               <Col md={12} className={''}>
                                   <div className={'golden_btn'}>
                                       {'درخواست فعال‌سازی تسهیم'}
                                   </div>
                                   <div className={'read_more_btn'}>
                                       {'بیشتر بدانید.'}
                                       <FontAwesomeIcon className={'icon'} icon={faArrowLeft}/>
                                   </div>
                               </Col>
                           </Row>
                       </div>
                   </Col>
                   <Col lg={6} md={12} sm={12} className={'content_block d-none d-lg-block d-md-block'}>
                       <div className={'payout_block d-flex justify-content-center'}>
                           <img src={payout} alt={'social'}/>
                       </div>
                   </Col>
               </Row>
               <Row className={'margin_top70 margin_bottom75'}>
                   <Col lg={6} md={12} className={'d-none d-lg-block d-md-block'}>
                       <div className={'d-flex justify-content-center zarin_plus'}>
                           <img src={zarinPlus} alt={'zarin'}/>
                       </div>
                   </Col>
                   <Col className={'content_block'} lg={6} md={12} sm={12}>
                       <div className={'margin40 d-flex flex-column text-sm-justify justify-content-center'}>
                           <h2>
                               {'زرین‌پلاس'}
                           </h2>
                           <div className={'content_block_title'}>
                               <h2>
                                   {'ابزار هوشمند سوددهی'}
                               </h2>
                               <p>
                                   {'زرین‌پلاس محصولی از زرین‌پال، فرصتی فراهم کرده است تا کسب و کارها در هر اندازه و دسته‌بندی شغلی، با در دست داشتن ابزاری قدرتمند برای وفادارسازی مشتریان و افزایش فروش محصولات خود، بتوانند کسب و کار خود را به بهترین شکل توسعه و گسترش دهند و جایگاه برترین فروشگاه منطقه را به خود اختصاص دهند.'}
                               </p>
                           </div>
                           <Row className={'mb-3'}>
                               <Col md={12} className={''}>
                                   <div className={'golden_btn'}>
                                       {'پیوستن با زرین پلاس'}
                                   </div>
                                   <div className={'read_more_btn'}>
                                       {'بیشتر بدانید.'}
                                       <FontAwesomeIcon className={'icon'} icon={faArrowLeft}/>
                                   </div>
                               </Col>
                           </Row>
                       </div>
                   </Col>
               </Row>
               <Row>
                   <Col xl={4} lg={12} md={12}>
                       <div className={'detail_block'}>
                           <h2>
                               {'ویژگی‌های درگاه پرداخت زرین‌پال'}
                           </h2>
                           <p>
                               {'درگاه پرداخت اینترنتی زرین‌پال، امکان مدیریت تراکنش‌های مالی در بستر وب را به راحتی امکان‌پذیر می‌کند و با پیاده‌سازی و اجرای راه‌کارهای هوشمندانه، باعث افزایش درصد تراکنش‌های موفق و سوددهی بیش‌تر می‌شود.'}
                           </p>
                       </div>
                   </Col>
                   <Col xl={8} lg={12} md={12}>
                       <Row>
                           <Col lg={6} md={6} className={'info_block'}>
                               <div className={'d-flex align-items-center'}>
                                   <img src={verified} alt={'verfication'}/>
                                   <span>
                              {'ضمانتِ پرداخت'}
                          </span>
                               </div>
                               <p>
                                   {'درگاه پرداخت زرین‌پال، تجربه‌ی پرداخت اینترنتی آسان، سریع و امن را به مشتریان کسب و کارهای آنلاین هدیه می‌دهد.'}
                               </p>
                           </Col>
                           <Col lg={6} md={6} className={'info_block'}>
                               <div className={'d-flex align-items-center'}>
                                   <img src={support} alt={'verfication'}/>
                                   <span>
                              {'پشتیبانی 24/7'}
                          </span>
                               </div>
                               <p>
                                   {'هفت روزِ هفته، با پشتیبانی ۲۴ ساعته‌ی زرین‌پال، آماده‌ی پاسخ‌گویی و راهنمایی به کاربران هستیم.'}
                               </p>
                           </Col>
                       </Row>
                       <Row>
                           <Col lg={6} md={6} className={'info_block'}>
                               <div className={'d-flex align-items-center'}>
                                   <img src={splite} alt={'verfication'}/>
                                   <span>
                              {'مسیردهی هوشمند'}
                          </span>
                               </div>
                               <p>
                                   {'استانداردهای متفاوت زرین‌پال در بازه‌های زمانی مختلف، باعث می‌شود کاربران به بهترین درگاه پرداخت با بالاترین میزان تراکنش‌های موفق هدایت شوند.'}
                               </p>
                           </Col>
                           <Col lg={6} md={6} className={'info_block'}>
                               <div className={'d-flex align-items-center'}>
                                   <img src={support} alt={'verfication'}/>
                                   <span>
                              {'امنیت پرداخت'}
                          </span>
                               </div>
                               <p>
                                   {'درگاه امن زرین‌پال، ضمانتی برای امنیت اطلاعات بانکی افراد، هنگام پرداخت‌‌های اینترنتی آن‌هاست.'}
                               </p>
                           </Col>
                       </Row>
                   </Col>
               </Row>
               <Row className={'m-1'}>
                   <Col lg={12} md={12} sm={12} className={'zarin_start_block d-flex flex-column align-items-center justify-content-center'}>
                    <span>
                        {"به خانواده‌ی یک میلیونی زرین‌پال بپیوندید."}
                    </span>
                       <p>
                           {"یک ماه رایگان، هدیه‌ی عضویت زرین‌پال به شما "}
                       </p>
                       <div className={'golden_btn'}>
                           {'شروع کنید'}
                       </div>
                   </Col>
               </Row>
               <Row>
                   <Col md={12} lg={12} className={'d-none align-items-center d-md-flex justify-content-between d-lg-flex support_block'}>
                       <div className={'right_side'}>
                           <p>پشتیبانی ۲۴ ساعته، ۷ روز هفته<span>|</span><span
                           > شماره تماس:<span className={'primary_color'}> ۴۱۲۳۹-۰۲۱</span></span>
                           </p>
                       </div>
                       <div className={'left_side primary_color'}>
                           {'درخواست پشتیبانی'}
                           <FontAwesomeIcon className={'icon'} icon={faArrowLeft}/>
                       </div>
                   </Col>
               </Row>
           </Container>
       </div>
    )
}


export default SecondaryBlock;