import { Outlet, NavLink, useNavigate } from "react-router-dom"
import strela from '../../images/strela.svg'
import v from '../../images/Vector.svg'
import h from '../../images/4123.svg'
import gav from '../../images/gav.svg'
import kros from '../../images/kros.svg'
import s from '../../styles/prof.module.css'
import { useState, useEffect } from 'react'
let random = (num) => {
    let str = 'qazwsxedcrfvtgbyhnujmikolpQAZWSXEDCRFVTGBYHNUJMIKOLP0123456789'
    let newStr = ''
    for(let i = 0; i < num; ++i){
        newStr += Math.floor(Math.random() * str.length)
    }
    return newStr
}

function Profile() {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [acc, setAcc] = useState(random(7));
    const [promo, setPromo] = useState(random(9));


    useEffect(() => {
        const savedOrders = localStorage.getItem('orderHistory');
        if (savedOrders) {
            setOrders(JSON.parse(savedOrders));
        }
    }, []);

    const showOrderHistory = () => {
        if (orders.length === 0) {
            alert('У вас пока нет истории заказов');
            return;
        }

        const orderList = orders.map((order, index) =>
            `Заказ #${index + 1}:\nНомер: ${order.orderNumber}\nАдрес: ${order.address}\nСумма: $${order.total.toFixed(2)}\nТоваров: ${order.itemsCount}\n\n`
        ).join('');

        alert(`Ваша история заказов:\n\n${orderList}`);


    };

    return (
        <>
            <div className={s.body3}>
                <div className={s.container}>
                    <div className={s.q}>
                        <div className={s.block}>
                            <div className={s.txt}>
                                 <span> <button className={s.btn_back1} onClick={() => navigate(-1)}><NavLink><img src={kros} alt="" /></NavLink></button></span>
                                <div>
                                    <p className={s.nas}>Настройки </p>
                                </div>
                                <div className={s.pod}>
                                    <div className={s.inpt}>
                                        <button className={s.i}>{acc}</button>
                                        <button className={s.i} onClick={showOrderHistory}>
                                            <img className={s.i1} src={gav} alt="" /> История заказов
                                        </button>
                                        <button className={s.i}>Промокод: #{promo}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={s.container}>
                    <div className={s.big_yaica}>
                        <div className={s.div_yaica}>
                            <div className={s.yaica}>
                                <div className={s.smert}>
                                    <p className={s.smert_mimi}>8 800 555 35 35</p>
                                </div>
                                <div className={s.smert}>
                                    <p className={s.smert_mimi}>aitishechkabubl</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <Outlet />
                </div>


                <div className={s.container}>
                    <div className={s.con_for_nav}>
                        <div className={s.nav}>
                            <div className={s.for_ikonki}>
                                <button className={s.btn_back} onClick={() => navigate(-1)}><NavLink><img src={strela} alt="" /></NavLink></button>
                                <NavLink to={'/'}><img src={v} alt="" /></NavLink>
                                <NavLink to={'/Profile'}><img src={h} alt="" /></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           


        </>
    )
}

export default Profile