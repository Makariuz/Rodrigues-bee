import './About.scss'

import bees__bg from '../../images/test__bg.png'

import beekeeping__bg from '../../images/beekeeping__bg.png'
import honey__bg from '../../images/bg__bees.jpeg'

export function About(){

    return (
        <div className='about__container'>
     
        <div className='about__wrapper'>

        <div className='about__bees'>
        <div className='bees__bg'>
            <img src={bees__bg} alt ="" />
        </div>

            <div className='bees__info'>
                <div className='bees__info__header'>
                    <h1>Our Bees </h1>
                </div>
                <div className='paragraph__info'>
                    <p>
                    Our honey is produced by the species of bee 'Apis mellifera' in a 
                    mountainous and forested region 
                    belonging to the district of Vila Real in Portugal. 
                    </p>
                    <br/>
                    <p>
                    It is a honey made of predominant nectar from chestnut and heather flowers, 
                    but the presence of pine,
                    strawberry tree, broom, bramble, among other species of trees in smaller 
                    quantities in that area is also notorious.
                    </p>
                    <br/>
                    <p>
                    As a rule, honey is extracted between July and September, 
                    using the traditional method, that is, extraction by cold centrifuge. 
                    As a completely natural product, honey tends to crystallize very easily, 
                    especially in cold temperatures.
                    </p>
                </div>
            </div>
            
        </div>

        <div className='about__bee__honey'>
            <div className='honey__bg'>
                <img src={honey__bg} alt ="" />
            </div>

            <div className='honey__info'>
            <div className='bees__honey__header'>
        
        
                <h1>Our Honey </h1>
            </div>
            <div className='paragraph__info'>
                <p>
                The Honey is a natural product with an accentuated aromatic characteristic. 
                Its color and flavor are directly related to the predominance of the 
                flowering used for its production. 
                </p>
                <br/>
                <p>
                Dark colored honeys are more nutritious, 
                rich in proteins and mineral salts, having a high price in the market. 
                Another outstanding feature in some honeys is the liquid or hard consistency 
                that it may present when stored in a container, being of equal quality in that 
                aspect. 
                
                </p>
                <br/>
                <p>
                Because it is a saturated solution of sugars, honey tends to crystallize 
                spontaneously, acquiring a solid consistency, this effect is nothing more 
                than the condensation, the agglutination, of the glucose particles.
                </p>
            </div>
            </div>
            
        </div>

        <div className='about__bee__keeping'>

            <div className='beekeeping__bg'>
                <img src={beekeeping__bg} alt ="" />
            </div>

            <div className='beekeping__info'>
            <div className='bees__honey__header'>
        
        
                <h1>Beekeeping </h1>
            </div>
            <div className='paragraph__info'>
                <p>
                Beekeeping is the activity that involves the study, techniques and direct work of producers with honey bees, with a view, in the first instance, to the controlled breeding of bees and the extraction and marketing of a wide range of bee products.
                </p>
                
            </div>
            </div>
            
        </div>   
        </div>
       

            
        <div class="about__wrapper__mobile">
  
  
  <div class="about__cards">
  <div className='about__bees'>
        <div className='bees__bg'>
            <img src={bees__bg} alt ="" />
        </div>

            <div className='bees__info'>
                <div className='bees__info__header'>
                    <h1>Our Bees </h1>
                </div>
                <div className='paragraph__info'>
                    <p>
                    Our honey is produced by the species of bee 'Apis mellifera' in a 
                    mountainous and forested region 
                    belonging to the district of Vila Real in Portugal. 
                    </p>
                    <br/>
                    <p>
                    It is a honey made of predominant nectar from chestnut and heather flowers, 
                    but the presence of pine,
                    strawberry tree, broom, bramble, among other species of trees in smaller 
                    quantities in that area is also notorious.
                    </p>
                    <br/>
                    <p>
                    As a rule, honey is extracted between July and September, 
                    using the traditional method, that is, extraction by cold centrifuge. 
                    As a completely natural product, honey tends to crystallize very easily, 
                    especially in cold temperatures.
                    </p>
                </div>
            </div>
            
        </div>
        <div className='about__bee__honey'>
            <div className='honey__bg'>
                <img src={honey__bg} alt ="" />
            </div>

            <div className='honey__info'>
            <div className='bees__honey__header'>
        
        
                <h1>Our Honey </h1>
            </div>
            <div className='paragraph__info'>
                <p>
                The Honey is a natural product with an accentuated aromatic characteristic. 
                Its color and flavor are directly related to the predominance of the 
                flowering used for its production. 
                </p>
                <br/>
                <p>
                Dark colored honeys are more nutritious, 
                rich in proteins and mineral salts, having a high price in the market. 
                Another outstanding feature in some honeys is the liquid or hard consistency 
                that it may present when stored in a container, being of equal quality in that 
                aspect. 
                
                </p>
                <br/>
                <p>
                Because it is a saturated solution of sugars, honey tends to crystallize 
                spontaneously, acquiring a solid consistency, this effect is nothing more 
                than the condensation, the agglutination, of the glucose particles.
                </p>
            </div>
            </div>
            
        </div>
        <div className='about__bee__keeping'>

            <div className='beekeeping__bg'>
                <img src={beekeeping__bg} alt ="" />
            </div>

            <div className='beekeping__info'>
            <div className='bees__honey__header'>


                <h1>Beekeeping </h1>
            </div>
            <div className='paragraph__info'>
                <p>
                Beekeeping is the activity that involves the study, techniques and direct work of producers with honey bees, with a view, in the first instance, to the controlled breeding of bees and the extraction and marketing of a wide range of bee products.
                </p>
                
            </div>
            </div>

        </div>  

  </div>
</div>
        </div>
    )
}