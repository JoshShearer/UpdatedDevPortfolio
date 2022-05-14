import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import makeStyles from "@mui/styles/makeStyles";
import styled from "styled-components";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import MKBox from "components/MKBox";

// const useStyles = makeStyles(styles);

const Image = styled.img`
  border-radius: 8px;
  max-width: 100%;
  max-height: 200px;
  ${'' /* height: auto; */}
`;

const skillImages = [
  ["React","https://www.mindinventory.com/blog/wp-content/uploads/2017/08/reactjs.jpg"],
  ["ReactN","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.mm8JucFufPWr2ls_I1h_0wHaDt%26pid%3DApi&f=1"],
  ["Nextjs","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.IbzKrKUVsfSH_UJxSX53EQHaEK%26pid%3DApi&f=1"],
  ["Typescript","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SSo_VpLEJ49WTi_ubpTVGQHaDa%26pid%3DApi&f=1"],

  ["Redux","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.I41ajuzUNAVtZGa7wExkNAHaDD%26pid%3DApi&f=1"],
  ["Rematch","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dIHwMZlm5PfZBTWfsQp_PgHaEA%26pid%3DApi&f=1"],

  ["CSS","https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/90562701/original/2efb936eb6ad65c1257e56f9ff1c16ab104bbf8d/fix-any-html-css-javascript-errors-website-bugs-or-issues.png"],
  ["Tailwindui","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.C2pQVFQywHnv6whsimADlgHaEo%26pid%3DApi&f=1"],
  ["MaterialUI @MUI","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._mdpsmNUZ05vQb-q09t3jAHaDc%26pid%3DApi&f=1"],

  ["MongoDB","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.qQwwv7aYYcjY1q42pOzPFwHaEL%26pid%3DApi&f=1"],
  ["SQL","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.srRWCNh2uhYtVQ0RcZXfpwHaD7%26pid%3DApi&f=1"],

  ["NodeJS","https://www.hostingadvice.com/wp-content/uploads/2018/09/node-js-logo.jpg"],
  ["JS","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.NBqrkgXTj3qPB5cZBXPFNQHaD1%26pid%3DApi&f=1"],
  
  ["FireB","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Pcwt9CLXrUlZQAUHTH9_SwHaDt%26pid%3DApi&f=1"],
  ["Heroku","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.zOmlX_YQko_-_6JV0Ai_XQHaDI%26pid%3DApi&f=1"],
  ["Docker",'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.E50RgHPgzJ5ZA_5HgUhXDQHaD4%26pid%3DApi&f=1'],

  ["Web3","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.AK6zWN12xUAhM9H4GE7QqAHaEa%26pid%3DApi&f=1"],
  ["Solidity", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.scrvt.com%2Fb095ee27d37b3d7b6b150adba9ac6ec8%2F5677e4f602626f21%2F0dd4688ca630%2Fv%2F5d972aa4629a%2Fsolidity_overview.png&f=1&nofb=1"],
  ["Ethereum", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.GuRtgayFyV4btd7YVZqosgHaEK%26pid%3DApi&f=1"],
  ["Smart Contracts","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.SvDFp8B8lyOLBQEih_QIPQHaEK%26pid%3DApi&f=1"],
  
  ["Python","https://www.technotification.com/wp-content/uploads/2017/05/Python-programming-compressed.jpg"],
  ["Pandas","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.BULwTfynXVAEDRtDYrB5dQAAAA%26pid%3DApi&f=1"],
  ["Numpy","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.C3w3zZRyuOfaxzxVBZABWwHaC9%26pid%3DApi&f=1"],
  ["TensorFlow","https://i.ytimg.com/vi/MrijcdNl_U4/maxresdefault.jpg"],
  ["NLP","https://www.freelancinggig.com/blog/wp-content/uploads/2017/07/Natural-Language-Processing.png"],
  ["AlgoTrad","https://www.digitaledge.org/wp-content/uploads/2018/02/How-Can-You-Master-Algorithmic-Trading.jpeg"],
  ["Selenium","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Q2nMVNtPBhI0peXXQTSAxQHaEZ%26pid%3DApi&f=1"],
  ["Craft Beer Pi","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis4-ssl.mzstatic.com%2Fimage%2Fthumb%2FPurple19%2Fv4%2F99%2Fc1%2F55%2F99c155c4-462e-ecc9-6457-6a0aee30f735%2Fsource%2F512x512bb.jpg&f=1&nofb=1"],
];

export default function SkillSection(props) {
  return (
    <div>
      <Typography variant="h2" align="center">
        Technical Skills{" "}
      </Typography>
      <MKBox sx={{ flexGrow: 1 }} justify="center">
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {skillImages.map((image, key) => (
            <Grid item xs={12} sm={12} md={4} key={key}>
              <Image alt={image[0]} src={image[1]} />
            </Grid>
          ))}
        </Grid>
      </MKBox>
    </div>
  );
}
