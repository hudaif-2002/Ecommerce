import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HerSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'
import { Link } from 'react-router-dom'


function Home() {

  // const dispatch = useDispatch();
  // const cartItem = useSelector((state)=> state.cart)
  // console.log(cartItem)

  // const addCart = () => {
  //   dispatch(addToCart("shirt"));
  // }

  // const deleteCart = () => {
  //   dispatch(deleteFromCart("shirt"));
  // }
  return (
    <Layout>
      
<HeroSection/>
<Filter/>
<ProductCard/>
<div className="flex gap-5 justify-center">
  <Link to={'/allProducts'}>
        <button className=' bg-gray-300 p-5 px-5 py-2 rounded-xl'>See more</button>
        </Link>
      </div>
<Track/>
<Testimonial/>
    </Layout>
  )
}

export default Home