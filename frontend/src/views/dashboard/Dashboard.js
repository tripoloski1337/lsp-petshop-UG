import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCarousel,
  CCarouselCaption,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
  CCol,
  CRow 
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const slides = [
  'https://www.wallpapertip.com/wmimgs/0-9949_cute-cat-whiskers-animal-eyes-pink-background-wallpaper.jpg',
  'https://www.warrenphotographic.co.uk/photography/bigs/42177-Adorable-mother-cat-and-tabby-kitten-on-pink-background.jpg',
  'https://wallpaperaccess.com/full/416415.jpg',
]

const Dashboard = () => {
  const [activeIndex] = useState(0)

  return (
    <CRow>
      <CCol xs="12" xl="12">
        <CCard>
          <CCardHeader>
            Weclome to arsalan pethsop
          </CCardHeader>
          <CCardBody>
            <CCarousel animate autoSlide={3000}>
              <CCarouselIndicators/>
              <CCarouselInner>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[0]} alt="slide 1" />
                  <CCarouselCaption><h3>Get your cat healthier</h3><p>find your truly partner</p></CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[1]} alt="slide 2"/>
                  <CCarouselCaption><h3>Give your partner, good nutrion from our store</h3><p>-whiskers</p></CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[2]} alt="slide 3"/>
                  <CCarouselCaption><h3>Your lil friend need something? let we help you</h3><p>-arsalan</p></CCarouselCaption>
                </CCarouselItem>
              </CCarouselInner>
              <CCarouselControl direction="prev"/>
              <CCarouselControl direction="next"/>
            </CCarousel>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Dashboard
