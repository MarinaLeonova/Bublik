import { Outlet, NavLink } from "react-router-dom"
import logo from '../images/logo.svg'
import Name from '../images/Name.svg'
import User from '../images/user.svg'
import Bag from '../images/Bag.svg'
import donat from '../images/donat.svg'
import Malina from '../images/Malina.svg'
import listik from '../images/listik.svg'
import htuka from '../images/htuka.svg'
import bo from '../images/bo.svg'
import st from '../images/st.png'
import cr from '../images/cr.png'
import gr from '../images/gr.png'
import mgp from '../images/megapon.svg'
import pnch from '../images/pnch.svg'
import crambl from '../images/crambl.svg'
import star from '../images/star.svg'
import our from '../images/our.svg'
import prof from '../images/prof.svg'
import strs from '../images/stars.svg'
import igor from '../images/igor.svg'
import Do from '../images/Do.svg'
import leaf from '../images/leaf.png'
import kust from '../images/kust.png'
import s from './App.module.css'

import { useDispatch } from 'react-redux';
import { addItem } from '../src/app/slice';

const donuts = [
  {
    id: 1,
    name: "ORANGE SUNSET",
    price: 2,
    description: "WITH CHESEE CHOCOLATE FILLING",
    image: st
  },
  {
    id: 2,
    name: "ORANGE SUNSET",
    price: 2,
    description: "WITH CHESEE CHOCOLATE FILLING",
    image: cr
  },
  {
    id: 3,
    name: "ORANGE SUNSET",
    price: 2,
    description: "WITH CHESEE CHOCOLATE FILLING",
    image: gr
  }
];

const combos = [
  {
    id: 4,
    name: "SWEET MORNING",
    price: 20,
    description: "DONUTS WITH BERRY FILLINGS AND FRUIT GLAZES",
    image: mgp
  },
  {
    id: 5,
    name: "YUM YUM SPRINKLE",
    price: 15,
    description: "BRIGHT AND COLORFUL DONUTS WITH CANDIES AND SPRINKLES",
    image: pnch
  },
  {
    id: 6,
    name: "SWEET NIGHT",
    price: 22,
    description: "JUICY BERRY-FILLED DONUTS WITH TANGY FRUIT GLAZES",
    image: crambl
  }
];




function App() {
  const dispatch = useDispatch();
  return (
    <>
      <div className={s.body1}>
        <div className={s.container}>

          <header className={s.header}>
            <div className={s.div_for_logo}>
              <NavLink to={'/'}> <img className={s.img_header} src={logo} alt="#" /> </NavLink>
              <img className={s.img_header} src={Name} alt="#" />
            </div>
            <nav className={s.mob}>
              <ul>
                <li>
                  <a href="#menuRef" className={s.border_r_f}>
                    MENU
                  </a>
                </li>
                <li>
                  <a href="#comboRef" className={s.border_r}>
                    COMBO
                  </a>
                </li>
                <li>
                  <a href="#aboutRef" className={s.border_r}>
                    ABOUT
                  </a>
                </li>
                <li>
                  <a href="#reviewsRef" className={s.border_r}>
                    REVIEWS
                  </a>
                </li>
                <li>
                  <a href="#contactsRef" className={s.border_r}>
                    CONTACTS
                  </a>
                </li>
              </ul>
            </nav>
            <div className={s.ac_and_bag}>
              <NavLink to={'/Profile'}><img src={User} alt="#" /></NavLink>
              <NavLink to={'/Korzina'}><img src={Bag} alt="#" /></NavLink>
            </div>
          </header>
        </div>
        <div className={s.container}>
          <div className={s.for_abs}>
            <div className={s.div_opisanie}>
              <img className={s.name_opisanie} src={bo} alt="" />
              <p className={s.opisanie}>Welcome to the world of sweet pleasures! Our donuts are not just a dessert, they are a real art. Each donut, made with love, gives an unforgettable taste and joy.</p>
            </div>
            <img className={s.Malina} src={Malina} alt="Малина" />
            <div className={s.hero_rigth}>
              <img className={s.donat} src={donat} alt="пончик" />
              <img className={s.htuka} src={htuka} alt="штука" />
              <img className={s.listik} src={listik} alt="листик" />
            </div>
          </div>

        </div>

        <div className={s.kartinki}>


          <div className={s.container}>
            <div className={s.today}>
              <div id="menuRef" className={s.try}>
                <p className={s.shadow_of_rty}>TRY THEM TODAY!</p>
              </div>
              <div className={s.block_donat}>
                <img className={s.top_list} src={kust} alt="" />
                <div className={s.donat_kart}>
                  <div className={s.text_donat}>
                    <div className={s.cont_img}>
                      <img className={s.don_st} src={st} alt="" />
                    </div>
                    <div className={s.t}>
                      <b>PINK PICKNIC </b> <span className={s.spn}>$2</span>
                    </div>
                    <div className={s.t1}>
                      <p className={s.w}>FILLED WITH MILK CHOHOLATE</p>
                      <button className={s.b} onClick={() => dispatch(addItem(donuts[0]))}>+</button>
                    </div>
                  </div>
                </div>
                <div className={s.donat_kart}>
                  < div className={s.text_donat}>
                    <div className={s.cont_img}>
                      <img className={s.don_st} src={cr} alt="" />
                    </div>
                    <div className={s.t}>
                      <b>ORANGE SUNSET</b> <span className={s.spn}>$2</span>
                    </div>
                    <div className={s.t1}>
                      <p className={s.w}>WITH CHESEE CHOCOLATE FILLING</p>
                      <button className={s.b} onClick={() => dispatch(addItem(donuts[1]))}>+</button>
                    </div>
                  </div>

                </div>
                <div className={s.donat_kart}>
                  <div className={s.text_donat}>
                    <div className={s.cont_img}>
                      <img className={s.don_st} src={gr} alt="" />
                    </div>
                    <div className={s.t}>
                      <b>GREEN YUM</b> <span className={s.spn}>$2</span>
                    </div>
                    <div className={s.t1}>
                      <p className={s.w}>STUFFED WITH DUBAI CHOCOLATE</p>
                      <button className={s.b} onClick={() => dispatch(addItem(donuts[2]))}>+</button>
                    </div>
                  </div>

                </div>
                <img className={s.bot_list} src={leaf} alt="" />
              </div>
            </div>
          </div>

          <div >
            <div className={s.container}>

              <div className={s.div_combo}>
                <div className={s.div_cmb}>
                  <b id="comboRef" className={s.b_combo}>COMBO SET</b>
                </div>


                <div>
                  <div className={s.con_for_many_donats}>
                    <div className={s.star1}>
                      <img src={star} alt="" />
                    </div>

                    <div className={s.star}>
                      <img src={star} alt="" />
                    </div>
                    <div className={s.kart_for_many_donats}>
                      <img className={s.img_donat1} src={mgp} alt="" />
                      <div className={s.text_for_many_donats}>
                        <b>SWEET MORNING</b>
                        <b className={s.cena}>$20</b>
                      </div>
                      <div className={s.text_for_many_donats}>
                        <p className={s.ops_mimi}>DONUTS WITH BERRY FILLINGS AND FRUIT GLAZES</p>
                      </div>
                      <div className={s.div_btn_many_pon}>
                        <button className={s.btn_many_pon1} onClick={() => dispatch(addItem(combos[0]))}>Add</button>
                      </div>

                    </div>

                    <div className={s.kart_for_many_donats}>
                      <img className={s.img_donat1} src={pnch} alt="" />
                      <div className={s.text_for_many_donats}>
                        <b>YUM YUM SPRINKLE</b>
                        <b className={s.cena}>$15</b>
                      </div>
                      <div className={s.text_for_many_donats}>
                        <p className={s.ops_mimi1}>BRIGHT AND COLORFUL DONUTS WITH CANDIES AND SPRINKLES</p>
                      </div>
                      <div className={s.div_btn_many_pon}>
                        <button className={s.btn_many_pon1} onClick={() => dispatch(addItem(combos[1]))}>Add</button>
                      </div>

                    </div>

                    <div className={s.kart_for_many_donats}>
                      <img className={s.img_donat1} src={crambl} alt="" />
                      <div className={s.text_for_many_donats}>
                        <b>SWEET NIGHT</b>
                        <b className={s.cena}>$22</b>
                      </div>
                      <div className={s.text_for_many_donats}>
                        <p className={s.ops_mimi}>JUICY BERRY-FILLED DONUTS WITH TANGY FRUIT GLAZES</p>
                      </div>
                      <div className={s.div_btn_many_pon}>
                        <button className={s.btn_many_pon1} onClick={() => dispatch(addItem(combos[2]))}>Add</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.container}>
              <div className={s.sadnk}>
                <div id="aboutRef" className={s.div_our}>
                  <img className={s.img_our} src={our} alt="" />
                </div>
                <div className={s.our}>

                  <div className={s.wtf}>
                    <p className={s.long_txt}>
                      <span className={s.span_of_long_txt}>In our world full of hustle and bustle and gray everyday life, we create small islands of happiness — our donuts. Our mission is to brighten up your days with vivid tastes and sincere emotions. We don't just bake donuts; we create culinary masterpieces that make hearts beat faster and smiles blossom.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.container}>
              <div className={s.back_of_otz}>
                <div id="reviewsRef" className={s.namr_cust}>
                  <b className={s.cust}>CUSTOMER REVIEWS</b>
                </div>
                <div className={s.cont_kart}>
                  <div className={s.figura}>
                    <div className={s.img_otz}>
                      <img src={prof} alt="" />
                    </div>
                    <div className={s.strs1}>
                      <img src={strs} alt="" />
                    </div>
                    <div className={s.name_otz}>
                      <b>Marina lol</b>
                    </div>
                    <div >
                      <p className={s.opis_otz}>The raspberry jam doughnut is just a bomb! I was pleasantly surprised by how fresh and fragrant it is. The only thing I can say is that they get eaten quickly, so it's better to take several at once!</p>
                    </div>

                  </div>

                  <div className={s.figura2}>
                    <div className={s.img_otz}>
                      <img src={igor} alt="" />
                    </div>
                    <div className={s.strs1}>
                      <img src={strs} alt="" />
                    </div>
                    <div className={s.name_otz}>
                      <b>Igor</b>
                    </div>
                    <div >
                      <p className={s.opis_otz}>I never thought that donuts could be so delicious! I tried lemon cream and was amazed at how fresh and light it was. I definitely recommend it to all my friends!</p>
                    </div>

                  </div>

                  <div className={s.figura}>
                    <div className={s.img_otz}>
                      <img src={prof} alt="" />
                    </div>
                    <div className={s.strs1}>
                      <img src={strs} alt="" />
                    </div>
                    <div className={s.name_otz}>
                      <b>Nikol 0_0</b>
                    </div>
                    <div id="contactsRef">
                      <p className={s.opis_otz}>The doughnuts are delicious, but I'd like more filling options. Anyway, they are very pleasing with their quality and freshness. A good place for a morning coffee!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.container}>
              <div className={s.footer}>
                <div className={s.do}>
                  <img src={Do} alt="" />
                </div>
                <div className={s.gorod}>
                  <p className={s.msk}>Moscow, st.Dreams, 360 lane.Kommunarka House</p>
                </div>
                <div className={s.contat}>
                  <p>8 800 555 35 35</p>
                  <p>aitishechkabubl@.ru</p>
                </div>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>

  )
}

export default App
