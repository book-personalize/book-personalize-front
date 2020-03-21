import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import styled from 'styled-components'

import Summary from '../components/BookDetail/Summary'
import Contents from '../components/BookDetail/Contents'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
`

const InnerContainer = styled.div`
  width: 1100px;
  min-height: calc(100vh - 64px);
  margin: 24px auto 0;
  .card-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
  }
`

const BookDetail: React.FC<RouteComponentProps> = ({ match }) => {
  const title = '저자 소개'
  const contents = `
    1977년 뉴욕에서 태어났다. 스탠퍼드 대학에서 영문학과 생물학을 공부했고, 영문학 석사 학위를 받았다. 문학과 철학, 과학과 생물학에 깊은 관심을 보이던 그는 이 모든 학문의 교차점에 있는 의학을 공부하기로 마음먹고 케임브리지 대학에서 과학과 의학의 역사와 철학 과정을 이수한 뒤 예일 의과 대학원에 진학해 의사의 길을 걸었다. 졸업 후에는 모교인 스탠퍼드 대학 병원으로 돌아와 신경외과 레지던트 생활을 하며 박사 후 연구원으로 일했다. 연구 업적을 인정받아 미국 신경외과 학회에서 수여하는 최우수 연구상을 수상하기도 했다.\n
    최고의 의사로 손꼽히며 여러 대학에서 교수 자리를 제안받는 등 장밋빛 미래가 눈앞에 펼쳐질 무렵, 암이 찾아왔다. 환자들을 죽음의 문턱에서 구해 오던 서른여섯 살의 젊은 의사가 하루아침에 자신의 죽음과 맞닥뜨리게 된 것이다.\n
    의사이자 환자의 입장에서 죽음에 대한 독특한 철학을 보인 그는 힘든 투병 생활 중에도 레지던트 과정을 마무리하는 등 삶에 대한 의지를 놓지 않았다. 약 2년간의 투병 기간 동안 ‘시간은 얼마나 남았는가(How Long Have I Got Left?)’, ‘떠나기 전에(Before I Go)’라는 제목의 에세이를 각각 <뉴욕타임스>와 <스탠퍼드메디슨>에 기고했고, 독자들의 엄청난 반향을 불러일으켰다. 2015년 3월, 아내 루시와 딸 엘리자베스 아카디아 등 사랑하는 많은 사람을 남기고 세상을 떠났다.`

  return (
    <Container>
      <InnerContainer>
        <Summary
          image=""
          title="책 제목"
          author="작가"
          genre="에세이/시"
        />
        <Contents title={title} contents={contents}/>
      </InnerContainer>
    </Container>
  )
}

export default BookDetail
