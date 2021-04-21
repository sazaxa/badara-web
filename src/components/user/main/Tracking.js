import React, { useState } from 'react';
import { TarkingWrap } from 'styles/MainPageStyles';

const Tracking = () => {
    const [TrackingNumber, setTrackingNumber] = useState('');
    console.log(TrackingNumber);

    const handleChange = e => {
        setTrackingNumber(e.target.value);
    };

    const handleClick = () => {
        window.open(
            `https://www.dhl.com/kr-ko/home/tracking/tracking-global-forwarding.html?submit=1&tracking-id=${TrackingNumber}`
        );
    };
    return (
        <TarkingWrap>
            <article className="title_wrap" style={{}}>
                <h2>DHL 배송조회</h2>
            </article>
            <article className="trackingBox">
                <p>배송조회</p>
                <article className="inputBox">
                    <input type="text" placeholder="해외 운송장번호 조회" onChange={e => handleChange(e)} />
                    <button type="button" onClick={handleClick}>
                        조회
                    </button>
                </article>
            </article>
        </TarkingWrap>
    );
};

export default Tracking;
