import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = ({title, price, date}) => {

    // 한자리 수를 두자리로 변환해주는 함수
    const make2Digit = (text) => {
        return text.toString().padStart(2, '0');
    }

    // 날짜 포맷팅 변환 함수 정의
    const makeFormattedDate = () => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();

        return `${year}년 ${make2Digit(month)}월 ${make2Digit(day)}일`;
    }

    // 숫자를 화폐 표기법으로 바꾸기
    const formattedPrice = new Intl.NumberFormat('ko-KR',{ style: 'currency', currency: 'KRW' }).format(price);


  return (
    <div className='expense-item'>
      <div>{makeFormattedDate()}</div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{formattedPrice}원</div>
      </div>
    </div>
  )
}

export default ExpenseItem;
