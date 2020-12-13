import React from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loader = () => (
    <div style={{
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        background: 'white',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <ClipLoader
            css={override}
            size={150}
            color={"#123abc"}
            loading={true}
        />
    </div>
)

export default Loader
