import React from "react";

import {
  // BlogCard,
  // CardInfo,
  // ExternalLinks,
  GridContainer,
  // HeaderThree,
  // Hr,
  // Tag,
  // TagList,
  // TitleContent,
  // UtilityList,
  // Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
// import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Youtube Films</SectionTitle>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/rZe7sFK3sTM?controls=0&amp;start=1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
    <GridContainer>
      {/* {projects.map(
        ({ id, image, title, description, source, visit, tags }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title={title}></HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent> Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit}>Code</ExternalLinks>
              <ExternalLinks href={visit}>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        )
      )} */}
    </GridContainer>
  </Section>
);

export default Projects;
