import v from '../../images/Vector.svg'
import h from '../../images/4123.svg'
import { Outlet, NavLink, useNavigate } from "react-router-dom"
import strela from '../../images/strela.svg'
import kros from '../../images/kros.svg'
import s from '../../styles/korzina.module.css'
import crox from '../../images/crox.svg'
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, deleteItem, clearCart } from '../app/slice'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectCards } from 'swiper/modules'
import 'swiper/css'
import { div } from 'framer-motion/client'




function Korzina() {
    const navigate = useNavigate();

    const { items, total, totalItems } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const handleIncrement = (item) => {
        dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
    }

    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
        } else {
            dispatch(deleteItem(item.id))
        }
    }

    const handleQuantityChange = (e, item) => {
        const newQuantity = parseInt(e.target.value) || 0
        if (newQuantity > 0) {
            dispatch(updateQuantity({ id: item.id, quantity: newQuantity }))
        } else {
            dispatch(deleteItem(item.id))
        }
    }

    const handleRemoveItem = (id) => {
        dispatch(deleteItem(id))
    }

    return (
        <>
            <div>
                <div className={s.body2}>
                    <p className={s.boss}>
                        Order
                        <span>
                            <button className={s.btn_back1} onClick={() => navigate(-1)}>
                                <NavLink>
                                    <img src={kros} alt="" />
                                </NavLink>
                            </button>
                        </span>
                    </p>
                    <div className={s.container}>
                        <div className={s.cart_items}>
                            {items.length === 0 ? (
                                <p className={s.empty_cart}></p>
                            ) : (
                                <Swiper
                                    modules={[Navigation, Pagination, EffectCards]}
                                    effect={'cards'}
                                    spaceBetween={1000}
                                    slidesPerView={2}
                                    navigation
                                    direction={'horizontal'}
                                    pagination={{ clickable: true }}
                                    className={s.swiper_container}
                                >
                                    {items.map(item => (
                                        <SwiperSlide key={item.id} className={s.swiper_slide} >
                                            <div className={s.cart_item}>
                                                <div className={s.item_info}>
                                                    <div className={s.name_and_btn}>
                                                        <h3>{item.name}</h3>
                                                        <button className={s.remove_btn} onClick={() => handleRemoveItem(item.id)}>
                                                            <img className={s.crox} src={crox} alt="" />
                                                        </button>
                                                    </div>
                                                    <img src={item.image} alt={item.name} className={s.item_image} />
                                                    <div className={s.ops_and_cena}>
                                                        <p className={s.ops_cen}>{item.description}</p>
                                                        <b className={s.cenab}>${item.price}</b>
                                                    </div>

                                                    <div className={s.quantity_controls}>
                                                        <button className={s.quantity_btn} onClick={() => handleDecrement(item)}> - </button>
                                                        <input
                                                            type="text"
                                                            min="1"
                                                            value={item.quantity}
                                                            onChange={(e) => handleQuantityChange(e, item)}
                                                            className={s.quantity_input}
                                                        />
                                                        <button className={s.quantity_btn} onClick={() => handleIncrement(item)}> +</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            )}
                        </div>
                        <div className={s.mobile_view}>
                            {items.map(item => (
                                <div key={item.id} className={s.cart_item_lex}>
                                    <div className={s.cart_top}>
                                        <img src={item.image} alt="" width={100} />
                                        <div>
                                            <h3 className={s.name1}>
                                                {item.name}
                                            </h3>
                                            <p className={s.ops_cen}>{item.description}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={s.quantity_controls}>
                                            <button className={s.quantity_btn} onClick={() => handleDecrement(item)}> - </button>
                                            <input
                                                type="text"
                                                min="1"
                                                value={item.quantity}
                                                onChange={(e) => handleQuantityChange(e, item)}
                                                className={s.quantity_input}
                                            />
                                            <button className={s.quantity_btn} onClick={() => handleIncrement(item)}> +</button>
                                            <b className={s.cenab}>${item.price}</b>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>



                    <div className={s.hell_yaeh}>
                        <div className={s.cart_footer}>
                            <h3 className={s.total}>Итого: </h3>
                            <h3 className={s.total}> ${total.toFixed(2)}</h3>
                        </div>
                    </div>

                    <div className={s.hell_yaeh}>
                        <div className={s.cart_footer}>
                            <h3 className={s.total1}>Товары: </h3>
                            <p className={s.total1}> ({totalItems}) Шт</p>
                        </div>
                    </div>

                    <div className={s.btn_for_kor}>
                        <div className={s.back}>
                            <button className={s.btn}> <NavLink className={s.sumachasoidy} to={'/Pay'}>Buy</NavLink></button>
                        </div>
                    </div>

                    <div className={s.con_for_nav}>
                        <div className={s.nav}>
                            <div className={s.for_ikonki}>
                                <button className={s.btn_back} onClick={() => navigate(-1)}><NavLink><img src={strela} alt="" /></NavLink></button>
                                <NavLink to={'/'}><img src={v} alt="" /></NavLink>
                                <NavLink to={'/Profile'}><img src={h} alt="" /></NavLink>
                            </div>
                        </div>
                    </div>

                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Korzina