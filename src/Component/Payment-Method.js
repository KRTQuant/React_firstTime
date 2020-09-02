import React from 'react';
import Mockup from './img/mockup.jpg';
import Step1 from './img/step1.png';
import Step2 from './img/step2.png';
import Step3 from './img/step3.png';
import Step4 from './img/step4.png';
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
                
            </div>
        </>
    )
}

export default Payment_Method