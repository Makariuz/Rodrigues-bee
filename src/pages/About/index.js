import "./About.scss";

import bees__bg from "../../images/test__bg.png";
import pic1 from "../../images/pic1.jpg";
import pic3 from "../../images/pic3.jpg";
import fly__bee from "../../images/flying__bee.png";
import honey__pic from "../../images/pack__honey.jpg";

import beekeeping__bg from "../../images/beekeeping__bg.png";
import honey__bg from "../../images/bg__bees.jpeg";
import { useState } from "react";

export function About() {
  const [showMore, setShowMore] = useState(false);
  const [showMoreHoney, setShowMoreHoney] = useState(false);
  const [showMoreKeeper, setShowMoreKeeper] = useState(false);

  return (
    <div className="about__container">
      <div className="about__wrapper__main">
        <div className="about__bees__main">
          {/* BEE INFO */}

          <div
            className={"bees__info__main " + (showMore && "show")}
            onClick={() => setShowMore(!showMore)}
          >
            <div className={"bees__info__img__main " + (showMore && "show")}>
              <img src={pic3} alt="" />
            </div>

            <div className="bees__info__header__main">
              <small> Click to view more!</small>
              <h1>Our Bees</h1>
            </div>

            <div className={"paragraph__intro__main " + (showMore && "show")}>
              <p>
                Our honey is produced by the species of bee 'Apis mellifera' in
                a mountainous and forested region belonging to the district of
                Vila Real in Portugal.
              </p>
            </div>

            <div className={"paragraph__info__main " + (showMore && "show")}>
              <p>
                Our honey is produced by the species of bee 'Apis mellifera' in
                a mountainous and forested region belonging to the district of
                Vila Real in Portugal.
              </p>
              <br />
              <p>
                It is a honey made of predominant nectar from chestnut and
                heather flowers, but the presence of pine, strawberry tree,
                broom, bramble, among other species of trees in smaller
                quantities in that area is also notorious.
              </p>
              <br />
              <p>
                As a rule, honey is extracted between July and September, using
                the traditional method, that is, extraction by cold centrifuge.
                As a completely natural product, honey tends to crystallize very
                easily, especially in cold temperatures.
              </p>
            </div>
          </div>

          {/* INFO ON HONEY */}

          <div
            className={"honey__info__main " + (showMoreHoney && "show")}
            onClick={() => setShowMoreHoney(!showMoreHoney)}
          >
            <div className={"honey__info__img__main " + (showMoreHoney && "show")}>
              <img src={honey__pic} alt="" />
            </div>

            <div className="honey__info__header__main">
              <small> Click to view more!</small>
              <h1>Our Honey</h1>
            </div>

            <div className={"paragraph__intro__main " + (showMoreHoney && "show")}>
              <p>
                The Honey is a natural product with an accentuated aromatic
                characteristic. Its color and flavor are directly related to the
                predominance of the flowering used for its production.
              </p>
            </div>

            <div className={"paragraph__info__main " + (showMoreHoney && "show")}>
              <p>
                Our honey is produced by the species of bee 'Apis mellifera' in
                a mountainous and forested region belonging to the district of
                Vila Real in Portugal.
              </p>
              <br />
              <p>
                Dark colored honeys are more nutritious, rich in proteins and
                mineral salts, having a high price in the market. Another
                outstanding feature in some honeys is the liquid or hard
                consistency that it may present when stored in a container,
                being of equal quality in that aspect.
              </p>
              <br />
              <p>
                Because it is a saturated solution of sugars, honey tends to
                crystallize spontaneously, acquiring a solid consistency, this
                effect is nothing more than the condensation, the agglutination,
                of the glucose particles.
              </p>
            </div>
          </div>

          {/* INFO BEEKEEPING */}

          <div
            className={"beekeeping__info__main " + (showMoreKeeper && "show")}
            onClick={() => setShowMoreKeeper(!showMoreKeeper)}
          >
            <div
              className={"beekeeping__info__img__main " + (showMoreKeeper && "show")}
            >
              <img src={pic1} alt="" />
            </div>

            <div className="beekeeping__info__header__main">
              <small> Click to view more!</small>
              <h1>The Fumigator</h1>
            </div>

            <div className={"paragraph__intro__main " + (showMoreKeeper && "show")}>
              <p>
                The fumigator is a tool used in the practice of beekeeping with
                the function of producing smoke and with the objective of making
                the bees calmer during the management of the swarm...
              </p>
            </div>

            <div className={"paragraph__info__main " + (showMoreKeeper && "show")}>
              <p>
                The fumigator is a tool used in the practice of beekeeping with
                the function of producing smoke and with the objective of making
                the bees calmer during the management of the swarm, thus
                preventing the bees from stinging the beekeeper and, inherently,
                the death of the bee.
              </p>
              <br />
              <p>
                The smoke also serves to mask the alarm pheromones released by
                the guard bees, giving the beekeeper more time to work on the
                hive.
              </p>
              <br />
              <p>
                This equipment is used in very specific cases, such as in hives
                with a large amount of stored honey or in hives with a high
                number of herds (bees).
              </p>
              <br />
              <p>
                The abusive use of this equipment can change the flavour of the
                honey and harm the swarm.
              </p>
            </div>
          </div>


        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="about__wrapper__mobile">
        <div className="about__cards">

          <div className="about__bees">
            <div
              className={"bees__info " + (showMore && "show")}
              onClick={() => setShowMore(!showMore)}
            >
              <div className={"bees__info__img " + (showMore && "show")}>
                <img src={pic3} alt="" />
              </div>

              <div className="bees__info__header">
                <small> Click to view more!</small>
                <h1>Our Bees</h1>
              </div>

              <div className={"paragraph__intro " + (showMore && "show")}>
                <p>
                  Our honey is produced by the species of bee 'Apis mellifera'
                  in a mountainous and forested region belonging to the district
                  of Vila Real in Portugal.
                </p>
              </div>

              <div className={"paragraph__info " + (showMore && "show")}>
                <p>
                  Our honey is produced by the species of bee 'Apis mellifera'
                  in a mountainous and forested region belonging to the district
                  of Vila Real in Portugal.
                </p>
                <br />
                <p>
                  It is a honey made of predominant nectar from chestnut and
                  heather flowers, but the presence of pine, strawberry tree,
                  broom, bramble, among other species of trees in smaller
                  quantities in that area is also notorious.
                </p>
                <br />
                <p>
                  As a rule, honey is extracted between July and September,
                  using the traditional method, that is, extraction by cold
                  centrifuge. As a completely natural product, honey tends to
                  crystallize very easily, especially in cold temperatures.
                </p>
              </div>
            </div>
          </div>
      
          <div className="about__bee__honey">
        

            <div
            className={"honey__info " + (showMoreHoney && "show")}
            onClick={() => setShowMoreHoney(!showMoreHoney)}
          >
            <div className={"honey__info__img " + (showMoreHoney && "show")}>
              <img src={honey__pic} alt="" />
            </div>

            <div className="honey__info__header">
              <small> Click to view more!</small>
              <h1>Our Honey</h1>
            </div>

            <div className={"paragraph__intro " + (showMoreHoney && "show")}>
              <p>
                The Honey is a natural product with an accentuated aromatic
                characteristic. Its color and flavor are directly related to the
                predominance of the flowering used for its production.
              </p>
            </div>

            <div className={"paragraph__info " + (showMoreHoney && "show")}>
              <p>
                Our honey is produced by the species of bee 'Apis mellifera' in
                a mountainous and forested region belonging to the district of
                Vila Real in Portugal.
              </p>
              <br />
              <p>
                Dark colored honeys are more nutritious, rich in proteins and
                mineral salts, having a high price in the market. Another
                outstanding feature in some honeys is the liquid or hard
                consistency that it may present when stored in a container,
                being of equal quality in that aspect.
              </p>
              <br />
              <p>
                Because it is a saturated solution of sugars, honey tends to
                crystallize spontaneously, acquiring a solid consistency, this
                effect is nothing more than the condensation, the agglutination,
                of the glucose particles.
              </p>
            </div>
          </div>
          </div>

              
          <div className="about__bee__keeping">
           

            <div
            className={"beekeeping__info " + (showMoreKeeper && "show")}
            onClick={() => setShowMoreKeeper(!showMoreKeeper)}
          >
            <div
              className={"beekeeping__info__img " + (showMoreKeeper && "show")}
            >
              <img src={pic1} alt="" />
            </div>

            <div className="beekeeping__info__header">
              <small> Click to view more!</small>
              <h1>The Fumigator</h1>
            </div>

            <div className={"paragraph__intro " + (showMoreKeeper && "show")}>
              <p>
                The fumigator is a tool used in the practice of beekeeping with
                the function of producing smoke and with the objective of making
                the bees calmer during the management of the swarm...
              </p>
            </div>

            <div className={"paragraph__info " + (showMoreKeeper && "show")}>
              <p>
                The fumigator is a tool used in the practice of beekeeping with
                the function of producing smoke and with the objective of making
                the bees calmer during the management of the swarm, thus
                preventing the bees from stinging the beekeeper and, inherently,
                the death of the bee.
              </p>
              <br />
              <p>
                The smoke also serves to mask the alarm pheromones released by
                the guard bees, giving the beekeeper more time to work on the
                hive.
              </p>
              <br />
              <p>
                This equipment is used in very specific cases, such as in hives
                with a large amount of stored honey or in hives with a high
                number of herds (bees).
              </p>
              <br />
              <p>
                The abusive use of this equipment can change the flavour of the
                honey and harm the swarm.
              </p>
            </div>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
}
