import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section class="py-2 hero-bg" style={{height:'100vh'}}>
        <div id="carouselExampleIndicators" class="carousel slide">

            <div class="carousel-inner pt-4">
                <div class="carousel-item active">
                    <section class="py-5">
                        <div class="container">
                            <div class="row align-items-center justify-content-start">
                                <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 p-5 text-center text-sm-start aos-init aos-animate" style={{position:'relative',top:'110px'}} data-aos="fade-right" data-aos-duration="1000">
                                    <h1 class="text-white fw-bold primary-heading" >
                                    Code anywhere, compile everywhere: Your virtual coding companion!
                                    </h1>
                                    
                                    <div class="my-3">
                                        <Link href="/Login" class="btn btn-light px-4 py-2 rounded-pill border-0">Reach Now</Link>
                                    </div>
                                </div>
                               
                               
                            </div>
                        </div>
                    </section>
                </div>

            </div>

        </div>
    </section>
    <section class="py-5 ">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='text-starts'>
                        <h2 class="text-dar">
                        Compile. Code. Conquer."

                        </h2>
                        <p class="text-dark">
                        "Empowering your code journey, one keystroke at a time: Unleash the potential of online compilation for seamless coding experiences. With our platform, transform your coding environment into a boundless playground where creativity knows no limits. Whether you're a seasoned developer or just starting out, dive into the world of coding with confidence, supported by our reliable and efficient online compiler. 
                        </p>

                       
                        <div>
                            <Link href="/sign-up" class="btn btn-outline-primary  px-4 py-2 border-0 rounded-pill">Reach Us</Link>
                        </div>
                    </div>
                </div>
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                    <div className='my-2'>
                        <img src='https://www.darkwiki.in/wp-content/uploads/2018/12/How-To-Install-Dev-C-in-Windows-10-For-Learn-C-Language.jpg' className='img-fluid rounded-5' />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-5 bg-white bg-con">
        <div class="container">
            <div class="row jusdtify-content-center">
                <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                    <div className='text-cener'>
                        <h2 class="text-white text-cener">
                        Unlocking the Benefits of Online Compilers: Empowering Your Code Journey
                        </h2>
                       
                        <div>
                            <Link href="/sign-up" class="btn btn-light px-4 py-2 border-0 rounded-pill">Reach Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
          
           
           
     
        </div>
    )
}


export default Home;