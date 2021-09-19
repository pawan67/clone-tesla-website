import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description = "Order Online Touchless Delivery"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
                backgroundImg = "model-s.jpg"


            
            />

            <Section
             title="Model y"
             description = "Order Online Touchless Delivery"
             leftBtnText="custom order"
             rightBtnText="existing inventory"
             backgroundImg = "model-y.jpg"
            />
            <Section
             title="Model 3"
             description = "Order Online Touchless Delivery"
             leftBtnText="custom order"
             rightBtnText="existing inventory"
             backgroundImg = "model-3.jpg"
            />
            <Section
             title="Model X"
             description = "Order Online Touchless Delivery"
             leftBtnText="custom order"
             rightBtnText="existing inventory"
             backgroundImg = "model-x.jpg"
            />
             <Section
             title="Lowest Cost Solar Panels in America"
             description = "Money Back gurantee"
             leftBtnText="Order now"
             rightBtnText="Learn more"
             backgroundImg = "solar-panel.jpg"
            />
             <Section
             title="Solar for New Roofs"
             description = "Solar roof cost less than a new roof"
             leftBtnText="Order now"
             rightBtnText="Learn more"
             backgroundImg = "solar-roof.jpg"
            />
             <Section
             title="Accessories"
             description = ""
             leftBtnText="Shop now"
             
             backgroundImg = "accessories.jpg"
            />
            
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    
`
export default Home
