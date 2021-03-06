import { css } from '@emotion/react'
import styled from '@emotion/styled'

const SharedTitle = css`
    font-weight: 500;
    line-height: 1.2;
    margin: 0;
    transition: font-size var(--transitionFast);
`

export const TitleLG = styled.h1`
    ${SharedTitle}
    font-size: 4.5rem;
    letter-spacing: -0.135rem;
    font-weight: ${props => props.weight === 'bold' ? '600' : '500' };
    @media screen and (max-width: 996px) {
        font-size: 3.875rem;
    }
    @media screen and (max-width: 768px) {
        font-size: 3rem;
    }
`

export const TitleMD = styled.h2`
    ${SharedTitle}
    font-size: 3rem;
    letter-spacing: -0.09rem;
    font-weight: ${props => props.weight === 'bold' ? '600' : '500' };
    @media screen and (max-width: 996px) {
        font-size: 2.25rem;
    }
    @media screen and (max-width: 768px) {
        font-size: 1.75rem;
    }
`

export const Title = styled.h3`
    ${SharedTitle}
    font-size: 2rem;
    /* letter-spacing: -0.06rem; */
    font-weight: ${props => props.weight === 'bold' ? '600' : '500' };
    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`

export const TitleSM = styled.h4`
    ${SharedTitle}
    font-size: 1.5rem;
    /* letter-spacing: -0.045rem; */
    font-weight: ${props => props.weight === 'bold' ? '600' : '500' };
    @media screen and (max-width: 768px) {
        font-size: 1.25rem;
    }
`

export const TitleXS = styled.h5`
    ${SharedTitle}
    font-size: 1.25rem;
    /* letter-spacing: -0.0375rem; */
    font-weight: ${props => props.weight === 'bold' ? '600' : '500' };
    @media screen and (max-width: 768px) {
        font-size: 1.125rem;
    }
`

const SharedBody = css`
    font-weight: 300;
    line-height: 1.35;
    margin: 0;
    transition: font-size var(--transitionFast);
`

export const BodyXL = styled.p`
    ${SharedBody}
    font-size: 1.5rem;
    @media screen and (max-width: 996px) {
        font-size: 1.25rem;
    }
    @media screen and (max-width: 768px) {
        font-size: 1.125rem;
    }
`

export const BodyLG = styled.p`
    ${SharedBody}
    font-size: 1.125rem;
    @media screen and (max-width: 996px) {
        font-size: 1rem;
    }
`

export const Body = styled.p`
    ${SharedBody}
    font-size: 1rem;
`

export const Label = styled.div`
    font-weight: 600;
    line-height: 1.2;
`

export const Overline = styled.div`
    font-weight: 600;
    line-height: 1.2;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.036rem;
`

export const Caption = styled.span`
    ${SharedBody}
    font-size: 0.875rem;
`