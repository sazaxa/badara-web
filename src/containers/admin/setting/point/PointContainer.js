import { PointComponent } from 'components';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPointListAction, pointStatusResetAction, savePointListAction } from 'store/point';

const PointContainer = () => {
    const dispatch = useDispatch();
    const { data, status } = useSelector(state => state.point);
    const [point, setPoint] = useState(data);
    console.log(point);

    const handleonChange = e => {
        const { name, value, checked } = e.target;

        if (name === 'registerAmount') {
            setPoint({
                ...point,
                [name]: value,
            });
        } else {
            setPoint({
                ...point,
                [name]: checked,
            });
        }
    };

    const handleSavePoint = () => {
        console.log('눌렀음');
        if (data === point) {
            alert('변경된게 없어예~ 변경하고 눌러주시이소~');
            return;
        } else {
            dispatch(savePointListAction({ data: point }));
        }
    };
    useEffect(() => {
        dispatch(getPointListAction());
        dispatch(pointStatusResetAction());
    }, []);

    useEffect(() => {
        if (data !== null) {
            setPoint(data);
        }
        console.log(point);
    }, [data]);

    useEffect(() => {
        if (status === 'success') {
            alert('수정 했습니다.');
            dispatch(pointStatusResetAction());
        }
    }, [status]);
    if (!point) return null;
    return <PointComponent data={point} onChange={handleonChange} onClick={handleSavePoint} />;
};

export default PointContainer;
