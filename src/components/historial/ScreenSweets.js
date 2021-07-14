import React from 'react'
import { useParams } from 'react-router-dom';
import {useSelector} from 'react-redux'
import { getDulcesById } from '../../helpers/getDulcesById';
import { Sweets } from './Sweets';

export const ScreenSweets = ({history}) => {
  const {compraId} = useParams()
  
  const { compras } = useSelector((state) => state.history);
  const sweets = getDulcesById(compraId,compras)
  const handleBack = () => {
    history.goBack()
  }
  
  return (
    <div className="content_products">
      <i className="fas fa-backspace pointer" onClick={handleBack}></i>
      <ol type="1">
        {sweets.map((sweet) => (
          <li>
            <Sweets key={sweet.id} {...sweet} />
          </li>
        ))}
      </ol>
    </div>
  );
}
