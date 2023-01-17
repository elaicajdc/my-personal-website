import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  flex-basis: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px;
`;

const ContentTitle = styled.p`
  font-family: 'Poppins', cursive;
  font-size: 3em;
`;

const ContentContainer = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const content = ({ title, description, width, style, link }) => {
  return (
    <ContentWrapper width={width} style={style}>
      <ContentContainer className="relative">
        <ContentTitle className="before:absolute before:w-4 before:h-4 before:bg-black before:-left-8 before:top-7">{title}</ContentTitle>
        <p className="max-w-[40vw] break-all">{description}</p>
        <a href={`${link}`}>
          <button type="button" class="mt-5 inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-black hover:bg-gray-600 transition ease-in-out duration-150" disabled="">
            {`View Project`}
          </button>
        </a>
      </ContentContainer>
    </ContentWrapper>
  );
};

content.defaultProps = {
  description:
    "Scroll it! Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur",
  width: "30%",
  title: "Slide title here"
};

export default content;
