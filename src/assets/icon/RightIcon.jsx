import styled from "styled-components"

const RIcon = styled.svg`
      width: 1.5rem;
      height: 1.5rem;
    `
export default function RightIcon(){

    return(
        <RIcon xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </RIcon>
    )
}