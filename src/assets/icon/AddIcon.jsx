import styled from "styled-components";

const PlusSvg = styled.svg`
  fill: #dde3ec;
  width: ${({wRem}) => wRem === 0 ? "50%" : `${wRem}rem`};
`
export default function AddIcon({wRem = 0}) {
    return (
        <PlusSvg wRem={wRem} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
        </PlusSvg>
    )
}