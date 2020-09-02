import React from 'react';
import Mockup from './img/mockup.jpg';
import Step1 from './img/step1.png';
import Step2 from './img/step2.png';
import Step3 from './img/step3.png';
import Step4 from './img/step4.png';
import Logo from './img/logo-light.png';
import './Payment-Method.css'

function Payment_Method() {
    return (
        <>
            <main className='Main_Header container'>
                <img src={Mockup} className="PM_BG" alt="black_mockup"></img>
                <div className='centered'>Payment Method</div>
            </main>
            <div className='second-container'>
                <div className='PM-text'>1. เลือกหลักสูตรที่ท่านต้องการอบรม คลิ๊กที่ปุ่ม “ซื้อตอนนี้” </div>
                <img src={Step1} alt="Step1" className='step-img'></img>
                <div className='PM-text'>2. แสดงรายละเอียดชื่อหลักสูตรที่ท่านเลือกซื้อ คลิ๊กปุ่ม “ชำระเงิน”</div>
                <img src={Step2} alt="Step2" className='step-img'></img>
                <div className='PM-text'>3. คลิ๊กเลือกทีไอคอนด้านล่าง Payment Gateway</div>
                <img src={Step3} alt="Step3" className='step-img'></img>
                <div className='PM-text'>4. ชำระเงินผ่านบัญชีธนาคารที่ปรากฎด้านล่าง (1) และอัพโหลดสลิปหลักฐานการชำระเงิน (2) คลิ๊ก “อัพโหลด</div>
                <img src={Step4} alt="Step4" className='step-img'></img>
            </div>
            <div className='footer'>
                <div className='upper'>
                    <div className='row'>
                        <div className='box'>
                            <img src={Logo} alt='footer-logo' className='footer-logo'></img>
                            <p className='parag'>Lorem ipsum dolor sit amet, consectetur </p>
                            <p className='parag'>adipiscing elit, sed do eiusmod tempor</p>
                        </div>
                        <div className='box'>
                            <p className='header'> ลิงค์ติดต่อ </p>
                            <p className='parag'> คอร์ส </p>
                            <p className='parag'> เข้าสู่ระบบ </p>
                            <p className='parag'> Register </p>
                        </div>
                        <div className='box'>
                            <p className='header'> ติดต่อเรา </p>
                            <p className='parag'> Tel. 0XX-XXX-XXXX </p>
                            <p className='parag'> abcd01@gmail.com </p>
                        </div>
                    </div>
                </div>
                <div className='lower'>
                    <hr className='light-gray footer-line'/>
                    <div className='inner-text'>
                        <p className='parag box'> Term & Condition </p>
                        <p className='parag'> เกี่ยวกับเรา </p>
                        <p className='parag f-end'> Mister Joe Kooler</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment_Method