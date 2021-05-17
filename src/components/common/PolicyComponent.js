import React from 'react';
import { Responsive } from 'styles/CommonStyles';
import { TosBox, TosWrap as PolicyWrap } from 'styles/RegisterStyles';

const PolicyComponent = () => {
    return (
        <Responsive>
            <PolicyWrap style={{ padding: 0 }}>
                <h2>이용약관</h2>
                <TosBox style={{ height: 'auto', border: 'none' }}>
                    이 약관은 주식회사 후스구스. (이하 '회사'라 함)가 운영하는 BADARA 배송대행 인터넷
                    홈페이지(https://badara.kr/ 이하 ‘BADARA’라 함)에서 제공하는 '배송대행 서비스)' 를 이용함에 있어
                    발송의뢰인, (이하 ‘회원’이라 함), 각 배송사 DHL, EMS 등, (이하 ‘배송사’라 함) 회사와 회원의 권리와
                    의무 및 책임사항을 규정함을 목적으로 합니다. <br />
                    <br />
                    “BADARA” 서비스는 해외로 물품을 발송하고자 하는 “회원”이 전문적으로 해외 배송을 진행하는 “배송사”의
                    서비스를 쉽게 이용할 수 있도록 돕는 배송 접수대행 형태의 서비스입니다.
                    <br />
                    <br />
                    <strong>제 1조, 중요사항</strong>
                    <br />
                    <br />
                    a. 전자제품, 음식류 (밀폐포장), 파손되기 쉬운 물품은 발송은 가능하나, 분실 및 파손, 세관에 의한
                    폐기에 대해서는 운송비를 포함해 일체보상을 받지 못합니다. 허나 일부가 아닌, 운송물 전체가 사라진
                    경우에는 “배송사”의 보상한도 규정에 따라 보상 받을 수도 있습니다.
                    <br />
                    b. 상대국세관에 의해서 통관을 위한 지연이 발생할 수 있습니다.
                    <br />
                    c. 신고금액 및 물품에 따라 상대국 세관에서 수취인에게 관부가세를 청구할 수 있습니다.
                    <br />
                    <br />
                    d. 청구된 관부가세는 수취인 혹은 BADARA “회원”이 납부합니다.
                    <br />
                    <br />
                    <strong> 제 2조, 통관, 수출입</strong>
                    <br />
                    <br />
                    a. “BADARA“는 “회원“이 발송하는 물품에 대한 서류 작성, 상품이나 서비스 Code 정정 또는 관련 법령이나
                    규정의 관세, 세금의 대리 지불 등 업무를 합니다.
                    <br />
                    b. “회원“의 수출 통관, 수출 관리 목적의 대행업체로서 또는 수취인의 수입 통관 및 등록의 업무를 수행할
                    관세사의 지정을 위한 수하인으로의 역할을 합니다.
                    <br />
                    c. “BADARA“가 정당한 권한이 있는 것으로 판단한 제3자의 요청이 있는 경우, 물품을 수하인의 수입
                    관세사나 다른 주소지로 인계할 수 있습니다. 
                    <br />
                    <br />
                    <strong>제 3조, 취급불가물품</strong>
                    <br />
                    <br />
                    a. IATA(국제항공운송협회) 또는 ICAO(국제민간항공협회), 관련국 정부, 기타 유관기관 등에 의해 위험물,
                    위험품, 금지, 제한된 품목
                    <br />
                    b. 세관기준에 맞추어 통관이 불가능한 품목 혹은 법령에 위배되는 모든 물품
                    <br />
                    c. 안전하게 또는 합법적으로 운송할 수 없다고  판단하는 물품 (그런 물품에는 동물류, 현금이나
                    유가증권, 귀금속, 장물, 폭발물, 군수품, 군수부품, 포르노그라피, 불법약물이나 마약류 등이 포함되며
                    이에 한정되지 않습니다.)(위에 열거한 취급불가 발송물품을 “BADARA”로 발송 할 경우 사전에 “BADARA”에게
                    어떠한 형태로든 알려야합니다. 그렇지 않을 경우 그 물품으로 발생한 모든 불이익에 대해 “회원”이 책임을
                    집니다.)
                    <br />
                    <br />
                    <strong> 제 4조, 배송 및 불가</strong>
                    <br />
                    <br />
                    a. 발송물은 “회원”이 제공하는 수취인 주소지로 배달되게 되나 수취인이 반드시 개인이 될 필요는
                    없습니다. 중앙수취지역으로 되어있는 발송물은 그 지역으로 배달됩니다.
                    <br />
                    b. “BADARA”는 발송물이 통관 가능하거나 “회원”이나 관련자로부터의 어떤 책임제기도 없는 폐기나 판매가
                    불가능한 경우, 발송물의 반송을 위해 합리적인 노력을 할 것입니다. 하지만 아래와 같은 경우 관련된
                    서비스비용이나 행정처리 상의 비용 등은 “회원”에게 부과될 것입니다.
                    <br />
                    - 수취인의 수취거절 및 관련비용의 지불거절
                    <br />
                    - 수취인이 발송물을 수취불가능 할 경우 <br />
                    - 세관통관상의 상품가치 오기입(Downvalue) 등의 문제 경우
                    <br />
                    - 합리적인 노력에도 불구하고 수취인을 찾을 수 없을 경우
                    <br />
                    <br />
                    <strong>제 5조, 검사</strong>
                    <br />
                    <br />
                    “BADARA”는 회원에게 사전 통보 없이 물품을 개봉, 검사 할 수 있습니다.
                    <br />
                    하지만, 원천적으로 밀봉되어 있는 제품의 경우는 따로 개봉하지 않습니다.
                    <br />
                    <br />
                    <strong>제 6조, 운임 및 운임청구</strong>
                    <br />
                    <br />
                    운임은 각 배송사별 중량측정기준으로 계산 청구되며 정확한 요금산정을 위해 “BADARA” 센터에 입고된 후
                    발송물의 무게를 재측정 할 수 있습니다.
                    <br />
                    <br />
                    “회원”은 “회원”이나 수취인 또는 관련된 3자에게 부과된 서비스 이용료를 부담합니다. 서비스 이용료는
                    “BADARA” 서비스를 이용하면서 발생한 운송료, 장치료, 관세, 세금, 기타비용을 의미합니다. 또한 상기
                    2항의 취급불가 발송품의 발송으로 인한 클레임, 파손, 벌금, 비용 등도 지불해야 합니다.
                    <br />
                    <br />
                    <strong>제 7조, 책임</strong>
                    <br />
                    <br />
                    “BADARA”는 단순 발송물 수집 접수대행 업체입니다. 따라서 발송물의 위법여부에 대한 책임이나 지연 및
                    파손, 분실에 의해 발생하는 직,간접적 손해에 대해서는 일체의 책임이 없습니다. 하지만, “BADARA”는
                    “회원”의 입장에서 “배송사”와 모든 문제가 원만히 해결될 때까지 최대한의 노력을 할 것을 약속합니다.
                    <br />
                    <strong>제 8조, 손해배상의 청구 기한</strong>
                    <br />
                    <br />
                    “BADARA”가 물품을 수령한 30일 이내에 “회원”은 손해배상 청구를 서면으로 제출해야합니다. 그렇지 않은
                    경우 “BADARA”는 책임을 지지 않습니다.
                    <br />
                    <br />
                    <strong>제 9조, 보험</strong>
                    <br />
                    <br />
                    보험을 요청, 관련 보험료를 지불하실 경우 화물의 손실이나 실물파손의 실재현금 가치에 대해 보험을
                    주선할 수 있습니다. (단, 각 배송사별 보험적용불가품목, 음식물 등 제외)보험은 간접 손실 (기회 이익,
                    이자, 미래의 사업 등) 이나 손해, 지연에 의해 야기된 손실이나 손해는 보장하지 않습니다.
                    <br />
                    <br />
                    <strong>제 10조, 지연</strong>
                    <br />
                    <br />
                    “BADARA”는 각 배송사의 통상적인 운송일정에 따라 고객의 물품을 배달하기 위해 최선을 다할 것입니다.
                    “BADARA”의 귀책사유로 인하여 부당하게 배송이 지연된 경우가 아니라면 배송 지연으로 인한 결과손해,
                    간접손해, 특별손해에 대해서도 책임을 지지 않습니다. 또한, 어떠한 경우에도 “BADARA”는 물품신고가액의
                    한도를 넘어 책임을 지지 않습니다.
                    <br />
                    <br />
                    <strong> 제 11조, 통제불능상황</strong>
                    <br />
                    <br />
                    “BADARA”는 "BADARA"가 통제할 수 없는 상황에 의하여 발생한 손실과 손해에 대하여 책임을 지지 않습니다.
                    여기에는 아래의 상황이 포함됩니다.- 천재지변 : 지진, 폭풍, 홍수, 안개- 불가항력 : 전쟁, 비행기 추락,
                    입출항 봉쇄, 폭동 또는 민간 소요사태- 물품자체의 특성으로 인한 부패 및 결함- 운송사이가 아닌 자에
                    의한 작위 또는 부작위 (아래의 주체를 포함합니다) <br />
                    - 회원, 수취인, 이해관계에 있는 3자, 세관 또는 공무원, 파업, 전기나 자력에 의한 전자제품이나 사진
                    이미지, 자료, 기록 등에 대한 손상 및 소멸
                    <br />
                    <br />
                    <strong>제 12조, 보증 및 변상</strong>
                    <br />
                    <br />
                    “회원”은 관련 법률과 규정을 지키지 않아 발생되는 손해를 입지 않도록 이용약관을 잘 확인해야 합니다.
                    수취인의 정보를 정확하게 기입하는 것과 상대국의 규정을 잘 이해하여 발송에 문제가 없도록 해야 합니다.
                    <br />
                    <br />
                    <strong>제 13조, 운송경로</strong>
                    <br />
                    <br />
                    “회원”은 모든 중계지 경유한 운송 등을 비롯한 운송경로, 변경 등에 대해 동의합니다.
                    <br />
                    <br />
                    <strong>제 14조, 준거법</strong>
                    <br />
                    <br />
                    약관기준에 대하여 발생되는 모든 분쟁은 예외 없이 선적국가의 비 배타적인 재판 관할에 귀속되며 그
                    국가의 법이 준거법이 됩니다. “회원”은 적용되는 법률이 배치되지 않는 한 상기 재판의 관할에 따라야
                    합니다.
                    <br />
                    <br />
                    <strong>제 15조, 조항의 독립성</strong>
                    <br />
                    <br />
                    일부 조항의 무효나 비시행이 이 약관의 다른 부분에 영향을 미칠 수 없습니다.
                    <br />
                     <br />
                    <strong>제 16조, 시행</strong>
                    <br />
                    <br />이 약관은 2021년 04월 01일부터 시행합니다.
                </TosBox>
            </PolicyWrap>
        </Responsive>
    );
};

export default PolicyComponent;
