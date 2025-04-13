import React from "react";
import styles from "./Note.module.css";

const NoteSection = ({ title, items }) => {
    return (
        <div className={styles.section}>
            <h2 className={styles.sectionTitle}>{title}</h2>
            <ul className={styles.itemsList}>
                {items.map((item, index) => (
                    <li key={index} className={styles.item}>
                        - {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Note = () => {
    const precautionItems = [
        "상기 이미지는 연출된 것으로 실제와 다를 수 있습니다.",
        "본 상품은 매장 재고 상황에 따라 동일 상품으로 교환이 불가능할 수 있습니다.",
        "동일 상품 교환이 불가한 경우 다른 상품으로 교환이 가능합니다. (지역 별/매장 시 차액 지불)",
        "매장 결제 시 본 상품 외에 기재된 금액의 60% 이상을 결제한 후 남은 잔액은 회원의 계정에 등록된 스타벅스 카드나 보유하고 있는 모기명 스타벅스 카드에 충전됩니다. 스타벅스 카드를 등록 또는 보유하고 있지 않은 고객의 경우, 무기명 스타벅스 카드를 발급받아 잔액을 충전할 수 있습니다. (일부 매장 잔액 적립 불가)",
        "스타벅스 앱의 사이렌 오더를 통해서도 주문 및 결제가 가능합니다. (일부 MD제외)",

        "현금영수증 발송시 [발송대기] 상태에서의 발송취소는 불가하오니, 발송전보 입력시 유의하여 주시기 바랍니다.",
        "잘못된 발송정보로 발급된 쿠폰의 취소/환불은 불가합니다. 단, 유효기간 만료전 미사용 쿠폰의 재발송은 무상으로 지원됩니다.",
        "발송목적이 재판매/컨공화/개인사용 목적으로 판명된 경우, 추인거부 및 추후 서비스 이용이 제한될 수 있습니다. [서비스 이용약관 19조]",
        "쿠폰 사용여부에 대한 개별 문의에는 답변하지 않습니다.",
    ];

    const restrictionItems = [
        "해당 쿠폰과 스타벅스 카드의 복합결제 기능는 스타벅스 카드의 고유 혜택인 Free Extra 및 별 적립은 적용 대상이 아닌 점 이용에 참고하시기 바랍니다.",
        "정식 판매처 외의 장소나 경로를 통하여 구매하거나, 기타의 방법으로 보유하신 쿠폰은 정상적인 사용 (환불, 재정송 등 포함)이 금지되거나 제한될 수 있으니 주의하시기 바랍니다.",
        "본 상품이미지를 가공/인쇄하여 사용하는 경우, 사용불가합니다.",
    ];

    const exchangeItems = [
        "미군부대 매장, 워터파크 입점 매장 등 일부 매장에서는 사용이 불가합니다.",
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.mainTitle}>상품 상세 정보 및 유의사항</h1>

            <NoteSection title="주의사항" items={precautionItems} />
            <NoteSection title="사용제한" items={restrictionItems} />
            <NoteSection title="사용처(교환처)" items={exchangeItems} />
        </div>
    );
};

export default Note;
