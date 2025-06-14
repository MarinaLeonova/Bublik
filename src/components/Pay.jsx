import p from '../../styles/pay.module.css'
import s from '../../styles/korzina.module.css'
import { Outlet, NavLink, useNavigate } from "react-router-dom"
import v from '../../images/Vector.svg'
import h from '../../images/4123.svg'
import k from '../../images/Kerti.svg'
import kros from '../../images/kros.svg'
import strela from '../../images/strela.svg'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../app/slice'

function Pay() {
    const { total, totalItems, items } = useSelector(state => state.cart)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleBuy = () => {
        if (items.length === 0) {
            alert('Корзина пуста');
            return;
        }

        const orderInfo = {
            orderNumber: Math.floor(Math.random() * 90000) + 10000,
            address: 'MOSCOW, STDREAMS, 360 LANE.KOMMUNARKA HOUSE',
            total: total,
            itemsCount: totalItems,
            date: new Date().toLocaleString()
        };

        const savedOrders = localStorage.getItem('orderHistory');
        const orders = savedOrders ? JSON.parse(savedOrders) : [];
        orders.push(orderInfo);
        localStorage.setItem('orderHistory', JSON.stringify(orders));

        dispatch(clearCart());
        alert(`Номер заказа: ${orderInfo.orderNumber}\nГород: Москва\nАдрес: ${orderInfo.address}`);
        navigate('/');
    }

    return (
        <>
            <div className={p.contaier}>
                <h1 className={p.pay1}> <span> <button className={p.btn_back2} onClick={() => navigate(-1)}><NavLink><img src={kros} alt="" /></NavLink></button></span>Payment</h1>


                <div className={p.back_for_pay}>

                    <div className={p.ybeitemenya}>

                        <img className={p.big_makev} src={k} alt="" />
                    </div>
                </div>

                <div className={s.hell_yaeh}>
                    <div className={s.cart_footer}>
                        <h3 className={s.total}>Итого: </h3>
                        <h3 className={s.total}> ${total.toFixed(2)}</h3>
                    </div>
                </div>


                <div className={s.btn_for_kor}>
                    <div className={s.back}>
                        <button className={s.btn} onClick={handleBuy}>Buy</button>

                    </div>
                </div>

                <div className={s.con_for_nav}>
                    <div className={s.nav}>
                        <div className={s.for_ikonki}>
                            <button className={s.btn_back} onClick={() => navigate(-1)}>
                                <img src={strela} alt="" />
                            </button>
                            <NavLink to={'/'}><img src={v} alt="" /></NavLink>
                            <NavLink to={'/Profile'}><img src={h} alt="" /></NavLink>
                        </div>
                    </div>
                </div>
                <Outlet />
            </div>
        </>
    )
}

export default Pay