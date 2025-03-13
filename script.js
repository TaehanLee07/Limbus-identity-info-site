// 캐릭터 데이터
const characters = [
    {
        name: "[ LCB 수감자 ] 이상",
        image: "images/Yi Sang/기본이상.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        },

        stats: {
            hp: "196", // 체력
            unfightGauge: "(1)127, (2)69, (3)29",
            speed: "4-8" // 속도
        },

        passives: {
            passive_name: "정보전달",
            passive: "[우울 x 4 공명]\n조작 패널에서 자신의 뒤에 있는 아군 2명에게 피해량 증가 1 부여", // 패시브
            supassive_name: "정보중화",
            support_passive: "[우울 x 4 보유]\n정신력이 가장 낮은 아군 1명 이번 턴에 정신력이 감소한 경우 턴 종료 시 정신력 10 회복" // 서포트 패시브
        },

        skills: {
            skill1: { // 1스킬에 대한 정보들
                skill_name: "쳐내기", // 스킬 명
                type: "우울", // 죄악 속성
                atkType: "참격",
                skill_num: "3", // 스킬 갯수
                skill1_info: "[적중시] 침잠 2 부여", // 스킬에 대한 설명
                def_value: 4, // 기본 위력
                plus_value: 7, // 코인 당 추가 위력
                count_of_coin: 1, // 코인의 갯수
                maxValue: "11", // 고점
                multiple_target: "1" // 공격 가중치 
            },
            skill2: {
                skill_name: "밀어찌르기", 
                type: "질투",
                atkType: "관통",
                skill_num: "2",
                skill2_info: "(Ⅱ) [적중시] 침잠 2 부여. 침잠 횟수 1 증가", 
                def_value: 4, 
                plus_value: 4,
                count_of_coin: 2,
                maxValue: "12",
                multiple_target: "1"
            },
            skill3: {
                skill_name: "연격", 
                type: "나태",
                atkType: "참격",
                skill_num: "1",
                skill3_info: "(Ⅰ) [적중시] 침잠 2 부여<br><br>(Ⅱ) [적중시] 침잠 1 부여<br><br>(Ⅲ) [적중시] 대상의 정신력이 0 미만이면 다음 턴에 취약 1 부여", 
                def_value: 6, 
                plus_value: 2,
                count_of_coin: 3,
                maxValue: "12",
                multiple_target: "1"
            },
            defense_skill: {
                skill_name: "가드",
                type: "우울",
                def_type: "방어",
                skill_num: "별도 생성",
                def_skill_info: "", // 효과가 없는 경우엔 공백 처리
                def_value: 7, 
                plus_value: 3,
                count_of_coin: 1,
                maxValue: "10",
            }
        }
    },
    {
        name: "[ 남부 세븐 협회 6과 ] 이상",
        image: "images/Yi Sang/세븐이상.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        },
        stats: {
            hp: "223", // 체력
            unfightGauge: "(1)134, (2)67",
            speed: "5-8" // 속도
        },

        passives: {
            passive_name: "관찰",
            passive: "[탐식 x 4 공명]\n합 진행 시 대상의 합 위력 -2", // 패시브
            supassive_name: "분석",
            support_passive: "[탐식 x 3 공명]\n최대 체력이 가장 높은 아군 1명 합 진행 시 합 위력 +1" // 서포트 패시브
        },

        skills: {
            skill1: { // 1스킬에 대한 정보들
                skill_name: "플레쉬", // 스킬 명
                type: "우울", // 죄악 속성
                atkType: "관통",
                skill_num: "3", // 스킬 갯수
                skill1_info: "[앞면 적중시] 파열 2 부여", // 스킬에 대한 설명
                def_value: 5, // 기본 위력
                plus_value: 7, // 코인 당 추가 위력
                count_of_coin: 1, // 코인의 갯수
                maxValue: "12", // 고점
                multiple_target: "1" // 공격 가중치 
            },
            skill2: {
                skill_name: "리포스트", 
                type: "탐식",
                atkType: "관통",
                skill_num: "2",
                skill2_info: "[합 승리시] 다음 턴에 마비 3 부여<br>[합 승리시] 파열 횟수 1 부여<br>"
                + "(Ⅱ) [적중시] 다음 턴에 취약 1 부여<br>[적중시] 파열 1 부여",
                def_value: 5, 
                plus_value: 4,
                count_of_coin: 2,
                maxValue: "13",
                multiple_target: "1"
            },
            skill3: {
                skill_name: "물리네", 
                type: "나태",
                atkType: "타격",
                skill_num: "1",
                skill3_info: "(Ⅰ) [적중시] 마지막 코인의 효과 부여 값 +1<br><br>(Ⅱ) [적중시] 마지막 코인의 효과 부여 값 +1<br><br>(Ⅲ) [적중시] 다음 턴에 관통 취약 1 부여"
                + "<br>[적중시] 파열 1 부여", 
                def_value: 5, 
                plus_value: 3,
                count_of_coin: 3,
                maxValue: "14",
                multiple_target: "1"
            },
            defense_skill: {
                skill_name: "가드",
                type: "탐식",
                def_type: "방어",
                skill_num: "별도 생성",
                def_skill_info: "", // 효과가 없는 경우엔 공백 처리
                def_value: 9, 
                plus_value: 3,
                count_of_coin: 1,
                maxValue: "10",
            }
        }
    },
    {
        name: "[ 남부 디에치 협회 ] 이상",
        image: "images/Yi Sang/디에치상.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        },
        stats: {
            hp: "223", // 체력
            unfightGauge: "(1)134, (2)67",
            speed: "4-6" // 속도
        },

        passives: {
            passive_name: "가라앉는 지식",
            passive: "[나태 x 3 보유]\n피격 시 공격자에게 침잠 1 부여. 보호막이 있는 동안 피격 시 침잠 1 추가 부여 (최대 4회)", // 패시브
            supassive_name: "반복 지식",
            support_passive: "[나태 x 4 보유]\n속도가 가장 빠른 아군 1명이 스킬을 버릴 때, 해당 캐릭터 최대 체력의 (5 × 버린 스킬의 등급)% 만큼 보호막을 얻음<br>(턴 당 최대 2회)" // 서포트 패시브
        },

        skills: {
            skill1: { // 1스킬에 대한 정보들
                skill_name: "지식 소모", // 스킬 명
                type: "탐식", // 죄악 속성
                atkType: "관통",
                skill_num: "3", // 스킬 갯수
                skill1_info: "이 스킬이 버려지면 (탐구한 지식 × 최대 체력의 3%)만큼 보호막을 얻음<br>[사용시] 자신의 모든 스킬 슬롯에서 등급이 가장 높은 스킬 1개를 버림"
                + "<br>[사용시] 대상의 침잠이 5 이상이면 코인 위력 +1<br>(Ⅰ) [적중시] 탐구한 지식만큼 흐트러짐 회복<br><br>(Ⅱ)[적중시] 탐구한 지식만큼 흐트러짐 회복", // 스킬에 대한 설명
                def_value: 3, // 기본 위력
                plus_value: 4, // 코인 당 추가 위력
                count_of_coin: 2, // 코인의 갯수
                maxValue: "13", // 고점
                multiple_target: "1" // 공격 가중치 
            },
            skill2: {
                skill_name: "잠궈닫기", 
                type: "색욕",
                atkType: "타격",
                skill_num: "2",
                skill2_info: "이 스킬이 버려지면 (탐구한 지식 × 최대 체력의 6%)만큼 보호막을 얻음<br>[사용시] 자신의 모든 스킬 슬롯에서 등급이 가장 높은 스킬 1개를 버림"
                + "<br>[사용시] 대상의 침잠이 5 이상이면 코인 위력 +1<br>[사용시] 다음 턴에 이 슬롯이 도발치 3 얻음<br>(Ⅱ) [적중시] 탐구한 지식만큼 침잠 부여<br><br>(Ⅲ) [적중시] 탐구한 지식만큼 침잠 부여",
                def_value: 4, 
                plus_value: 3,
                count_of_coin: 3,
                maxValue: "16",
                multiple_target: "1"
            },
            skill3: {
                skill_name: "지식의 가호", 
                type: "나태",
                atkType: "타격",
                skill_num: "1",
                skill3_info: "이 스킬이 버려지면 (탐구한 지식 × 최대 체력의 12%)만큼 보호막을 얻음<br>[사용시] 다음 턴에 이 슬롯이 도발치 10 얻음"
                + "<br>[사용시] 자신의 체력이 50% 미만이면 코인 위력 +1<br>(Ⅳ) [적중시] 침잠 횟수 3 증가", 
                def_value: 4, 
                plus_value: 2,
                count_of_coin: 4,
                maxValue: "16",
                multiple_target: "1"
            },
            defense_skill: {
                skill_name: "탐구 몰입",
                type: "나태",
                def_type: "방어",
                skill_num: "별도 생성",
                def_skill_info: "[사용시] 자신의 모든 스킬 슬롯에서 무작위 스킬 2개를 등급이 낮은 순으로 버림<br>[사용시] 다음 턴에 이 슬롯이 도발치 5 얻음", // 효과가 없는 경우엔 공백 처리
                def_value: 12, 
                plus_value: 6,
                count_of_coin: 1,
                maxValue: "18",
            }
        }
    },
    {
        name: "[ 어금니 사무소 해결사 ] 이상",
        image: "images/Yi Sang/어금니이상.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        },
        stats: {
            hp: "199", // 체력
            unfightGauge: "(1)139, (2)80, (3)40",
            speed: "4-7" // 속도
        },

        passives: {
            passive_name: "이럴 때 일수록…",
            passive: "[나태 x 3 보유]\n적에게 진동 폭발 시 입히는 흐트러짐 손상 4 당 방어 레벨 감소 1 부여 (턴마다 적 1명당 최대 5)", // 패시브
            supassive_name: "벌려진 일 수습",
            support_passive: "[나태 x 3 보유]\n최대 체력이 가장 낮은 아군 1명이 적에게 진동 폭발 시 입히는 흐트러짐 손상 4 당 다음 턴에 방어 레벨 감소 1 부여<br>(턴마다 적 1명당 최대 3)" // 서포트 패시브
        },

        skills: {
            skill1: { // 1스킬에 대한 정보들
                skill_name: "침착하게", // 스킬 명
                type: "색욕", // 죄악 속성
                atkType: "관통",
                skill_num: "3", // 스킬 갯수
                skill1_info: "이 스킬이 버려지면 자신의 진동 횟수 4 증가<br>[사용시] 자신의 진동 횟수 2 증가<br>"
                + "자신의 진동 횟수가 5 이상일 때 코인 위력 +1"
                + "<br>(Ⅱ) [적중시] 진동 횟수 2 증가", // 스킬에 대한 설명
                def_value: 3, // 기본 위력
                plus_value: 4, // 코인 당 추가 위력
                count_of_coin: 2, // 코인의 갯수
                maxValue: "13", // 고점
                multiple_target: "1" // 공격 가중치 
            },
            skill2: {
                skill_name: "도박수", 
                type: "나태",
                atkType: "타격",
                skill_num: "2",
                skill2_info: "이 스킬이 버려지면 자신의 진동 횟수 4 증가<br>[사용시] 자신의 모든 스킬 슬롯에서 등급이 가장 낮은 스킬 1개를 버림"
                + "<br>(Ⅰ) [적중시] 진동 횟수 3 증가<br>[적중시] 자신의 진동 횟수가 5 이상일 때, 진동 폭발.<br>대상의 진동 횟수 2 감소",
                def_value: 4, 
                plus_value: 12,
                count_of_coin: 1,
                maxValue: "16",
                multiple_target: "1"
            },
            skill3: {
                skill_name: "어금니 갈기", 
                type: "분노",
                atkType: "타격",
                skill_num: "1",
                skill3_info: "[사용시] 자신의 모든 스킬 슬롯에서 등급이 가장 낮은 스킬 1개를 버림<br>[사용시] 자신의 진동 횟수 10을 소모하여 코인 위력 +2"
                + "<br>(Ⅰ) [적중시] 진동 4 부여<br>[적중시] 스킬 사용 시 진동 횟수를 소모했으면, 진동 폭발<br><br>(Ⅲ) [적중시] 방어 레벨 감소 2 부여<br>[적중시] 스킬 사용 시 진동 횟수를 소모했으면, 진동 폭발", 
                def_value: 4, 
                plus_value: 3,
                count_of_coin: 3,
                maxValue: "19",
                multiple_target: "1"
            },
            defense_skill: {
                skill_name: "가드",
                type: "나태",
                def_type: "방어",
                skill_num: "별도 생성",
                def_skill_info: "[사용시] 자신의 모든 스킬 슬롯에서 등급이 가장 낮은 스킬 1개를 버림", // 효과가 없는 경우엔 공백 처리
                def_value: 10, 
                plus_value: 5,
                count_of_coin: 1,
                maxValue: "15",
            }
        }
    },
    {
        name: "[ 피쿼드호 일등 항해사 ] 이상",
        image: "images/Yi Sang/피쿼드상.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        },
        stats: {
            hp: "190", // 체력
            unfightGauge: "(1)124, (2)67, (3)29",
            speed: "4-7" // 속도
        },

        passives: {
            passive_name: "일등 항해사의 작살",
            passive: "[오만 x 3 보유]\n크리티컬 적중 시 스킬로 부여하는 출혈 위력 +2 (턴 당 최대 6회)", // 패시브
            supassive_name: "일등 항해사의 노련함",
            support_passive: "[오만 x 3 보유]\n호흡을 가장 많이 보유한 아군 1명이 크리티컬 적중 시 스킬로 부여하는 출혈 위력 +2<br>(턴 당 최대 6회)" // 서포트 패시브
        },

        skills: {
            skill1: { // 1스킬에 대한 정보들
                skill_name: "후벼파기", // 스킬 명
                type: "오만", // 죄악 속성
                atkType: "관통",
                skill_num: "3", // 스킬 갯수
                skill1_info: "[사용시] 자신의 호흡 횟수 2 증가<br>(Ⅱ) [적중시] 다음 턴에 속박 1 부여<br>[적중시] 출혈 2 부여", // 스킬에 대한 설명
                def_value: 3, // 기본 위력
                plus_value: 4, // 코인 당 추가 위력
                count_of_coin: 2, // 코인의 갯수
                maxValue: "11", // 고점
                multiple_target: "1" // 공격 가중치 
            },
            skill2: {
                skill_name: "쑤시고 쑤시기", 
                type: "질투",
                atkType: "관통",
                skill_num: "2",
                skill2_info: "[사용시] 자신의 호흡 횟수 2 증가<br>자신의 호흡이 5 이상이면, 합 위력 +3<br>"
                + "<br>(Ⅰ) [적중시] 호흡 2 얻음<br><br>(Ⅱ) [적중시] 출혈 1 부여<br>[크리티컬 적중시] 이 코인 재사용 (최대 3회)",
                def_value: 4, 
                plus_value: 4,
                count_of_coin: 2,
                maxValue: "24",
                multiple_target: "1"
            },
            skill3: {
                skill_name: "급습", 
                type: "탐식",
                atkType: "관통",
                skill_num: "1",
                skill3_info: "사용시] 호흡 5 얻음<br>자신의 호흡이 7 이상이면, 코인 위력 +1"
                + "<br>(Ⅰ) [적중시] 자신의 호흡 횟수 2 증가<br><br>[적중시] 출혈 4 부여<br>[크리티컬 적중시] 출혈 횟수 6 증가", 
                def_value: 4, 
                plus_value: 6,
                count_of_coin: 2,
                maxValue: "18",
                multiple_target: "1"
            },
            defense_skill: {
                skill_name: "회피",
                type: "오만",
                def_type: "회피",
                skill_num: "별도 생성",
                def_skill_info: "", // 효과가 없는 경우엔 공백 처리
                def_value: 3, 
                plus_value: 10,
                count_of_coin: 1,
                maxValue: "13",
            }
        }
    },
    {
        name: "[ LCE E.G.O::초롱 ] 이상",
        image: "images/Yi Sang/초롱이상.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        },
        stats: {
            hp: "199", // 체력
            unfightGauge: "(1)100",
            speed: "4-6" // 속도
        },

        passives: {
            passive_name: "외형 또한 이전 L사의 E.G.O에 비해, 환상체와 가깝게 추출할 수 있소",
            passive: "[탐식 x 3 보유]\n사망 시 자신을 가장 마지막으로 공격한 대상에게 파열 5, 파열 횟수 3을 부여하고, 가장 부족한 속성 E.G.O 자원 4종을 2개씩 얻음"
            + "<br>공격자가 없거나 아군에게 사망한 경우, 현재 파열 횟수가 가장 적은 적에게 파열 5, 파열 횟수 3 부여<br>자신이 미끼 요정 상태인 경우, 이 효과로 부여하는 파열 위력이 2배로 적용됨", // 패시브
            supassive_name: "E.G.O가 붕괴될 때 거름과 같이 분해되오",
            support_passive: "[탐식 x 5 보유]\n현재 체력이 가장 낮은 아군 1명이 사망 시 가장 부족한 속성의 E.G.O 자원 2종을 2개씩 얻음" // 서포트 패시브
        },

        skills: {
            skill1: { // 1스킬에 대한 정보들
                skill_name: "E.G.O는 제식 장비라 할지라도,", // 스킬 명
                type: "나태", // 죄악 속성
                atkType: "타격",
                skill_num: "3", // 스킬 갯수
                skill1_info: "[전투 시작시] 자신을 타겟팅한 스킬의 수만큼 합 패배 시 최종 위력이 증가 (최대 3)<br>[사용시] 다음 턴에 도발치 3 얻음"
                + "<br>[사용시] 대상의 파열이 15, 파열 횟수가 3 이상이면, 이 스킬의 효과로 파열을 부여하지 않음<br>"
                + "[합 패배] 이 스킬에서 부여하는 파열 위력 +2<br>(Ⅰ) 파괴 불가 코인<br>[적중시] 파열 1 부여<br><br>" +
                "(Ⅱ) 파괴 불가 코인<br>[적중시] 파열 1 부여", // 스킬에 대한 설명
                def_value: 4, // 기본 위력
                plus_value: 3, // 코인 당 추가 위력
                count_of_coin: 2, // 코인의 갯수
                maxValue: "10", // 고점
                multiple_target: "1" // 공격 가중치 
            },
            skill2: {
                skill_name: "로보토미때의 E.G.O보다 환상체와의 감응 정도에 따라", 
                type: "질투",
                atkType: "관통",
                skill_num: "2",
                skill2_info: "[전투 시작시] (자신을 타겟팅한 스킬의 수 × 2)만큼 합 패배 시 최종 위력이 증가 (최대 6)<br>[사용시] 다음 턴에 도발치 5 얻음<br>"
                + "[사용시] 대상의 파열이 15, 파열 횟수가 3 이상이면, 이 스킬의 효과로 파열 횟수를 부여하지 않음<br>[합 패배] 이 스킬에서 부여하는 파열 횟수 +2<br>" +
                "<br>(Ⅰ) 파괴 불가 코인<br>[적중시] 파열 횟수 2 증가",
                def_value: 8, 
                plus_value: 6,
                count_of_coin: 1,
                maxValue: "14",
                multiple_target: "1"
            },
            skill3: {
                skill_name: "본체의 특징을 더 유연하게 활용 가능하오", 
                type: "탐식",
                atkType: "관통",
                skill_num: "1",
                skill3_info: "자신의 잃은 체력 1% 당 피해량 +0.8%<br>[전투 시작시] 자신을 타겟팅한 스킬의 수만큼 기본 위력이 증가 (최대 3)<br>"
                + "[사용시] 미끼 요정 3 얻음 (턴 당 1회)<br>[사용시] 다음 턴에 도발치 8 얻음<br>[사용시] 대상의 파열이 15, 파열 횟수가 3 이상이면, 이 스킬의 효과로<br> 파열 위력과 횟수를 부여하지 않고, 기본 위력 +1"
                + "<br>[공격 종료시] 정신력 30 회복<br><br>(Ⅰ) [적중시] 파열 횟수 3 증가<br[적중시] 다음 턴에 속박 2 부여<br><br><br>(Ⅱ) [적중시] 파열 1 부여<br><br>(Ⅲ) [적중시] 파열 1 부여", 
                def_value: 16, 
                plus_value: [-5],
                count_of_coin: 3,
                maxValue: "20",
                multiple_target: "1"
            },
            defense_skill: {
                skill_name: "다만 그 감응과 동기화 정도에 따라 잡아먹힐 수 있소",
                type: "탐식",
                def_type: "반격",
                skill_num: "별도 생성",
                def_skill_info: "[전투 시작시] 미끼 요정 3 얻음 (턴 당 1회)<br>[사용시] 다음 턴에 도발치 8 얻음<br>" +
                "[사용시] 대상의 파열이 15, 파열 횟수가 3 이상이면, 이 스킬의 효과로 파열 횟수를 부여하지 않고, 기본 위력 +3<br>"
                + "(Ⅰ) [적중시] 파열 횟수 2 증가", // 효과가 없는 경우엔 공백 처리
                def_value: 10, 
                plus_value: 5,
                count_of_coin: 1,
                maxValue: "18",
            }
        }
    },

    {
        name: "[ 검계 살수 ] 이상",
        image: "images/Yi Sang/검계살수 이상.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        },

        stats: {
            hp: "180", // 체력
            unfightGauge: "(1)127, (2)69, (3)29",
            speed: "4-8" // 속도
        },

        passives: {
            passive_name: "냉정",
            passive: "[오만 x 4 보유]\n합 승리 시 호흡 횟수 1 증가<br>호흡 횟수 5당 코인 위력 +1 (최대 3)", // 패시브
            supassive_name: "사사",
            support_passive: "[오만 x 3 보유]\n정신력이 가장 높은 아군 1명 스킬의 효과로 얻는 호흡 횟수 +1" // 서포트 패시브
        },

        skills: {
            skill1: { // 1스킬에 대한 정보들
                skill_name: "격세", // 스킬 명
                type: "오만", // 죄악 속성
                atkType: "참격",
                skill_num: "3", // 스킬 갯수
                skill1_info: "[사용시] 호흡 횟수 2 얻음<br>[적중시] 다음 턴에 호흡 3 얻음", // 스킬에 대한 설명
                def_value: 6, // 기본 위력
                plus_value: 7, // 코인 당 추가 위력
                count_of_coin: 1, // 코인의 갯수
                maxValue: "16", // 고점
                multiple_target: "1" // 공격 가중치 
            },
            skill2: {
                skill_name: "두의틀기", 
                type: "분노",
                atkType: "참격",
                skill_num: "2",
                skill2_info: "[합 승리시] 다음 턴에 자신의 호흡 횟수 2 증가", 
                def_value: 2, 
                plus_value: 7,
                count_of_coin: 1,
                maxValue: "17",
                multiple_target: "1"
            },
            skill3: {
                skill_name: "이면찬자", 
                type: "질투",
                atkType: "참격",
                skill_num: "1",
                skill3_info: "[사용시] 호흡 2 얻음<br><br>(Ⅰ) [앞면 적중시] 다음 턴에 호흡 2 얻음<<br><br>(Ⅲ) 크리티컬 피해량 +70%", 
                def_value: 8, 
                plus_value: 2,
                count_of_coin: 3,
                maxValue: "23",
                multiple_target: "1"
            },
            defense_skill: {
                skill_name: "반격",
                type: "오만",
                def_type: "반격",
                skill_num: "별도 생성",
                def_skill_info: "크리티컬 피해량 +70%", // 효과가 없는 경우엔 공백 처리
                def_value: 10, 
                plus_value: 8,
                count_of_coin: 1,
                maxValue: "21",
            }
        }
    },
    {
        name: "[ 개화 E.G.O 동백 ] 이상",
        image: "images/Yi Sang/동백 이상.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        },

        stats: {
            hp: "180", // 체력
            unfightGauge: "(1)127, (2)69, (3)29",
            speed: "3-7" // 속도
        },

        passives: {
            passive_name: "냉정",
            passive: "[오만 x 4 보유]\n합 승리 시 호흡 횟수 1 증가<br>호흡 횟수 5당 코인 위력 +1 (최대 3)", // 패시브
            supassive_name: "사사",
            support_passive: "[오만 x 3 보유]\n정신력이 가장 높은 아군 1명 스킬의 효과로 얻는 호흡 횟수 +1" // 서포트 패시브
        },

        skills: {
            skill1: { // 1스킬에 대한 정보들
                skill_name: "움트는 봉우리", // 스킬 명
                type: "오만", // 죄악 속성
                atkType: "관통",
                skill_num: "3", // 스킬 갯수
                skill1_info: "[사용시] 진동 횟수 3을 얻음<br>(Ⅱ) [적중시] 다음 턴에 침잠 횟수 1 증가<br>(Ⅲ) [적중시] 다음 턴에 침잠 횟수 2 증가", // 스킬에 대한 설명
                def_value: 3, // 기본 위력
                plus_value: 2, // 코인 당 추가 위력
                count_of_coin: 3, // 코인의 갯수
                maxValue: "9", // 고점
                multiple_target: "1" // 공격 가중치 
            },
            skill2: {
                skill_name: "찰나의 꽃바람", 
                type: "분노",
                atkType: "타격",
                skill_num: "2",
                skill2_info: "[전투 시작시] 자신의 진동 횟수를 6 소모하여 공격 가중치 3 스킬로 변경<br>메인 타켓의 침잠 횟수가 6 이상이면, 코인 위력 +1<br>"
                + "(Ⅰ) [적중시] 다음 턴에 침잠 2 부여<br><br>(Ⅱ) [적중시] 다음 턴에 침잠 2 부여<br><br>(Ⅲ) [적중시] 다음 턴에 침잠 2 부여", 
                def_value: 4, 
                plus_value: 4,
                count_of_coin: 3,
                maxValue: "19",
                multiple_target: "1"
            },
            skill3: {
                skill_name: "피를 머금은 향기", 
                type: "질투",
                atkType: "관통",
                skill_num: "1",
                skill3_info: "[합 패배] 정신력 20 감소<br>[사용시] 진동 횟수 6을 얻음<br>(Ⅰ) [적중시] 침잠 횟수 1 증가<br><br>"
                + "(Ⅱ) [적중시] 침잠 횟수 1 증가<br><br>(Ⅲ) [적중시] 대상의 침잠이 6 이상이면, 침잠쇄도<br>[적중시] 자신의 진동 횟수가 10 이상이면, 피해량의 40%만큼 추가 피해", 
                def_value: 6, 
                plus_value: 4,
                count_of_coin: 3,
                maxValue: "18",
                multiple_target: "1"
            },
            defense_skill: {
                skill_name: "흩날리는 잔향",
                type: "나태",
                def_type: "회피",
                skill_num: "별도 생성",
                def_skill_info: "[회피 성공시] 침잠 1 부여", // 효과가 없는 경우엔 공백 처리
                def_value: 10, 
                plus_value: 4,
                count_of_coin: 1,
                maxValue: "14",
            }
        }
        
    },
    {
        name: "[ W사 3등급 정리요원 ] 이상",
        image: "images/Yi Sang/W상.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        },
        stats: {
            hp: "216", // 체력
            unfightGauge: "(1)140, (2)76",
            speed: "3-7" // 속도
        },

        passives: {
            passive_name: "비워낸 생각",
            passive: "[탐식 x 4 보유]\n턴 종료 시 자신의 충전 횟수 5 당 다음 턴에 신속 1을 얻음. (최대 3)<br>자신이 스킬로 충전 횟수를 소모할 때, 현재 체력 비율이 가장 낮은 아군 1명에게 충전 역장 3 부여", // 패시브
            supassive_name: "정리 시범 교육",
            support_passive: "[탐식 x 4 보유]\n충전 횟수가 가장 높은 아군 1명이 파열이 있는 대상에게 가하는 피해량이 대상의 파열 위력에 비례하여 증가<br>(파열 1당 1.5%. 최대 15%)" // 서포트 패시브
        },

        skills: {
            skill1: { // 1스킬에 대한 정보들
                skill_name: "차원 긋기", // 스킬 명
                type: "나태", // 죄악 속성
                atkType: "참격",
                skill_num: "3", // 스킬 갯수
                skill1_info: "[사용시] 자신의 충전 횟수 2 증가<br>충전 횟수가 10 이상이면, 코인 위력 +2<br><br>"
                + "[적중시] 자신의 충전 횟수 2 증가<br>[적중시] 파열 2 부여", // 스킬에 대한 설명
                def_value: 5, // 기본 위력
                plus_value: 6, // 코인 당 추가 위력
                count_of_coin: 1, // 코인의 갯수
                maxValue: "13", // 고점
                multiple_target: "1" // 공격 가중치 
            },
            skill2: {
                skill_name: "에너지 순환", 
                type: "탐식",
                atkType: "관통",
                skill_num: "2",
                skill2_info: "[사용시] 자신의 충전 횟수 7 증가<br>충전 횟수가 10 이상이면, 코인 위력 +1<br><br>"
                + "(Ⅰ) [적중시] 다음 턴에 속박 1 부여<br><br>(Ⅱ) [적중시] 파열 3 부여<br>[적중시] 자신의 충전 횟수가 10 이상이면, 파열 3 부여, 파열 횟수 2 증가", 
                def_value: 4, 
                plus_value: 4,
                count_of_coin: 2,
                maxValue: "12",
                multiple_target: "1"
            },
            skill3: {
                skill_name: "차원의 틈", 
                type: "우울",
                atkType: "관통",
                skill_num: "1",
                skill3_info: "[사용시] 충전 횟수가 15 미만이면, 충전 횟수를 10 소모하여 코인 위력 +1<br>[사용시] 충전 횟수를 15 소모하여 코인 위력 +2"
                + "<br>[공격 시작 전] 충전 횟수를 15 소모했다면, 파열 횟수 3 증가<br>(Ⅰ) [앞면 적중시] 파열 1 부여<br><br>"
                + "(Ⅱ) [앞면 적중시] 파열 1 부여<br><br>(Ⅲ)[적중시] 스킬 사용시 소모한 충전 횟수 5 당 파열 3 부여 (최대 9)<br>[적중시] 스킬 사용시 충전 횟수 15 소모하였으면, 차원 균열 2 부여<br>[적 처치 시] 충전 역장 5 얻음", 
                def_value: 5, 
                plus_value: 4,
                count_of_coin: 3,
                maxValue: "23",
                multiple_target: "1"
            },
            defense_skill: {
                skill_name: "텅 빈 차원",
                type: "우울",
                def_type: "회피",
                skill_num: "별도 생성",
                def_skill_info: "충전 횟수 5 당 기본 위력 +1(최대 2)<br>[회피 성공 시] 다음 턴에 처음으로 스킬로 부여하는 파열 +1 (턴 당 최대 증가량: 3)", // 효과가 없는 경우엔 공백 처리
                def_value: 10, 
                plus_value: 4,
                count_of_coin: 1,
                maxValue: "16",
            }
        }
    },
    {
        name: "[ 약지 점묘파 스튜던트 ] 이상",
        image: "images/Yi Sang/약상.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        },
        stats: {
            hp: "190", // 체력
            unfightGauge: "(1)124, (2)67, (3)29",
            speed: "3-7" // 속도
        },

        passives: {
            passive_name: "과제평가",
            passive: "[색욕 x 4 보유]\n적중시 대상에게 출혈이 4 이상 있으면 정신력 2 회복<br>대상이 보유한 부정적인 효과 1개당 정신력 1 추가 회복. (최대 3)<br>"
            + "이 효과로 정신력 회복 시 자신의 정신력이 최대면 다음 턴에 공격 레벨 증가 2 얻음 (턴 당 패시브 최대 발동 횟수 : 4회)", // 패시브
            supassive_name: "미학견습",
            support_passive: "[색욕 x 4 보유]\n정신력이 가장 낮은 아군이 공격 적중시 대상이 보유한 부정적인 효과 1개당 정신력 2 회복 (최대 6)"
            + "대상에게 출혈이 있으면 3 추가 회복 (턴 당 패시브 최대 발동 횟수 : 2회)" // 서포트 패시브
        },

        skills: {
            skill1: { // 1스킬에 대한 정보들
                skill_name: "덧칠", // 스킬 명
                type: "우울", // 죄악 속성
                atkType: "관통",
                skill_num: "3", // 스킬 갯수
                skill1_info: "대상의 출혈이 6 이상이면 합 위력 +1<br>(Ⅱ) [앞면 적중시] 화상, 출혈, 진동, 파열, 침잠 중 무작위 1개 효과의 횟수 2 증가<br><br>(Ⅲ) [적중시] 출혈 2 부여", // 스킬에 대한 설명
                def_value: 2, // 기본 위력
                plus_value: 3, // 코인 당 추가 위력
                count_of_coin: 3, // 코인의 갯수
                maxValue: "12", // 고점
                multiple_target: "1" // 공격 가중치 
            },
            skill2: {
                skill_name: "혈점묘화", 
                type: "색욕",
                atkType: "관통",
                skill_num: "2",
                skill2_info: "대상의 출혈 3 당 합 위력 +1 (최대 2)<br>대상의 출혈 횟수 3 당 코인 위력 +1 (최대 2)<br>"
                + "[적중시] 40% 확률로 코인 재사용. 대상이 보유한 부정적인 효과 1개당 재사용 확률 +20%<br>(스킬당 최대 2회 재사용 가능)" +
                "<br>[적중시] 출혈 횟수 1 증가<br>[적중시] 화상, 출혈, 진동, 파열, 침잠 중 무작위 1개 효과의 횟수 3 증가", 
                def_value: 8, 
                plus_value: 8,
                count_of_coin: 1,
                maxValue: "38",
                multiple_target: "1"
            },
            skill3: {
                skill_name: "핏방울 채색", 
                type: "나태",
                atkType: "관통",
                skill_num: "1",
                skill3_info: "대상의 출혈 3 당 합 위력 +1 (최대 2)<br>대상의 출혈 횟수 3 당 코인 위력 +1 (최대 2)"
                + "<br><br>"
                + "(Ⅱ) [적중시] 출혈 횟수 1 증가. 대상이 보유한 부정적인 효과가 3개 이상이면 추가 2 증가<br>[적중시] 화상, 출혈, 진동, 파열, 침잠 중 무작위 1개 효과의 횟수 3 증가<br><br>(Ⅲ)[적중시] 출혈 1 부여. 대상이 보유한 부정적인 효과가 3개 이상이면 2 추가 부여<br>"
                + "[적중시] 화상, 출혈, 진동, 파열, 침잠 중 무작위 1개 효과의 위력 2 부여<br><br>(Ⅳ) 대상이 보유한 부정적인 효과 1개당 피해량 +25% (최대 125%)<br>"
                + "[공격 종료시] 대상이 흐트러졌거나 사망했으면, 부정적인 효과를 가장 적게 보유한 적 2명에게<br> 화상, 출혈, 진동, 파열, 침잠 중 무작위 1개 효과 2 부여", 
                def_value: 3, 
                plus_value: 3,
                count_of_coin: 4,
                maxValue: "25",
                multiple_target: "1"
            },
            defense_skill: {
                skill_name: "붓 털기",
                type: "색욕",
                def_type: "방어",
                skill_num: "별도 생성",
                def_skill_info: "대상의 출혈 1 당 기본 위력 +1 (최대 10)", // 효과가 없는 경우엔 공백 처리
                def_value: 10, 
                plus_value: 4,
                count_of_coin: 1,
                maxValue: "24",
            }
        }
    },
    {
        name: "[ 로보토미 E.G.O::엄숙한 애도 ] 이상",
        image: "images/Yi Sang/엄숙한애도이상.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        },
        stats: {
            hp: "180", // 체력
            unfightGauge: "(1)127, (2)69, (3)29",
            speed: "3-8" // 속도
        },

        passives: {
            passive_name: "쏘아라.쏘으리로다.",
            passive: "[우울 x 3 공명]\n공격 종료 시 자신의 스킬에 의해 대상이 사망했으면, 재장전<br>산나비·죽은나비를 얻으면, 다음 턴에 신속 2 얻음 (턴 당 1회)", // 패시브
            passive_name2: "죽어가는나비를본다.",
            passive2: "[우울 x 4 공명]\n전투 시작 시 산나비·죽은나비를 각각 10씩 보유함<br>산나비·죽은나비를 소모할 때, 해당 효과의 산나비(위력)와 죽은나비(횟수)를 무작위로 소모"
            + "<br><br>나비를 부여할 때, 해당 코인에서 소모한 산나비·죽은나비에 따라 부여<br>- 산나비를 소모했으면, 소모한 값만큼 산나비를 부여<br>- 죽은나비를 소모했으면, 소모한 값만큼 죽은나비를 부여"
            + "<br><br>스킬 사용 중 산나비·죽은나비가 부족하면, 다음 코인을 모두 취소하고 재장전<br><br>재장전을 하거나 산나비·죽은나비를 얻을 때, 현재 정신력에 따라 얻는 나비가 정해짐"
            + "<br>- 정신력이 0 이상이면, 30% 확률로 산나비를, 70% 확률로 죽은나비를 얻음<br>- 정신력이 0 미만이면, 70% 확률로 산나비를, 30% 확률로 죽은나비를 얻음<br>- 확률은 각 탄환마다 개별적으로 적용됨",
            supassive_name: "구원의 손",
            support_passive: "[우울 x 4 보유]\n아군의 스킬 적중 시 대상의 침잠을 2 소모하여 나비 1 부여 (턴 당 3회)" // 서포트 패시브
        },

        skills: {
            skill1: { // 1스킬에 대한 정보들
                skill_name: "떠난이에게 축하를", // 스킬 명
                type: "우울", // 죄악 속성
                atkType: "참격",
                skill_num: "3", // 스킬 갯수
                skill1_info: "보유한 산나비·죽은나비가 10 이상이면, 합 위력 +1<br>대상의 침잠과 모든 나비의 합이 6 이상이면, 코인 위력 +1<br>[합 승리시] 침잠 횟수 2 증가<br>"
                + "<br>(Ⅰ) 산나비·죽은나비 1 소모<br>[적중시] 소모한 산나비·죽은나비만큼 나비 부여<br><br>(Ⅱ) 산나비·죽은나비 1 소모<br>[적중시] 소모한 산나비·죽은나비만큼 나비 부여", // 스킬에 대한 설명
                def_value: 4, // 기본 위력
                plus_value: 4, // 코인 당 추가 위력
                count_of_coin: 2, // 코인의 갯수
                maxValue: "15", // 고점
                multiple_target: "1" // 공격 가중치 
            },
            skill2: {
                skill_name: "남은자에게 엄숙한 애도를", 
                type: "질투",
                atkType: "관통",
                skill_num: "2",
                skill2_info: "보유한 산나비·죽은나비가 10 이상이면, 합 위력 +1<br>대상의 침잠과 모든 나비의 합 6 당 코인 위력 +1 (최대 2)<br>[합 승리시] 침잠 횟수 1 증가<br>[공격 종료시] 최대 공명 수만큼 산나비·죽은나비를 얻음 (최대 6)"
                + "- 해당 공명이 완전 공명이면,<br>(최대 공명 수 × 2)만큼 얻음 (최대 12)<br>- 해당 공명이 완전 공명 4 이상이면, 대신 재장전<br><br>(Ⅰ) 산나비·죽은나비 5 소모<br>[적중시] 소모한 산나비·죽은나비만큼 나비 부여"
                + "<br><br>(Ⅱ) 산나비·죽은나비 1 소모<br>[적중시] 소모한 산나비·죽은나비만큼 나비 부여", 
                def_value: 4, 
                plus_value: 6,
                count_of_coin: 2,
                maxValue: "21",
                multiple_target: "1"
            },
            skill3: {
                skill_name: "이상으로 장례는 이상이오", 
                type: "나태",
                atkType: "참격",
                skill_num: "1",
                skill3_info: "보유한 산나비·죽은나비 5마다 기본 위력 +1 (최대 4)<br>대상의 침잠과 모든 나비의 합 6 당 코인 위력 +1 (최대 2)<br>[합 승리시] 침잠 횟수 3 증가<br>[공격 종료시] 재장전"
                + "<br><br>(Ⅰ) 산나비·죽은나비 1 소모<br>[적중시] 소모한 산나비·죽은나비만큼 나비 부여<br><br>(Ⅱ) 산나비·죽은나비 6 소모<br>[적중시] 소모한 산나비·죽은나비만큼 나비 부여<br><br>"
                + "(Ⅲ) 보유한 산나비·죽은나비 전부 소모<br>[적중시] 소모한 산나비·죽은나비만큼 나비 부여<br>[적중시] 이 스킬에서 소모한 산나비·죽은나비 1 당 피해량 +4%<br><br>(Ⅳ) [적중시] 대상의 모든 나비만큼 우울 피해"
                + "<br>- 산나비와 죽은나비의 합으로 계산", 
                def_value: 4, 
                plus_value: 3,
                count_of_coin: 4,
                maxValue: "28",
                multiple_target: "1"
            },
            defense_skill: {
                skill_name: "관에서나비가날아오리라",
                type: "우울",
                def_type: "방어",
                skill_num: "별도 생성",
                def_skill_info: "[전투 시작시] 재장전 (턴 당 1회)<br>[전투 시작시] 최대 체력의 (지정한 대상의 모든 나비)%만큼 보호막을 얻음 (턴 당 최대 20%)", // 효과가 없는 경우엔 공백 처리
                def_value: 10, 
                plus_value: 4,
                count_of_coin: 1,
                maxValue: "14",
            }
        }
        
    },
    {
        name: "[ 남부 리우 협회 3과 ] 이상",
        image: "images/Yi Sang/리우이상.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        },
        
        stats: {
            hp: "203", // 체력
            unfightGauge: "(1)132, (2)71, (3)30",
            speed: "4-6" // 속도
        },

        passives: {
            passive_name: "내면의 열혈",
            passive: "[분노 x 4 보유]<br>턴 종료 시 현재 정신력이 가장 낮은 아군 1명의 정신력을 5 + (최대 공명 수)만큼 회복시킴. (최대 10)<br>" +
            "(자신 또는 패닉, E.G.O 침식 상태인 아군 제외)<br><br>" + "회복 대상이 화상 위력이나 횟수를 부여하는 기본 스킬을 가지고 있으면, 정신력 5 추가 회복<br>" +
            "분노 공명 4 이상이면, 회복 대상 1명 추가", // 패시브
            supassive_name: "리우 방진",
            support_passive: "[분노 x 3 공명]<br>정신력이 가장 낮은 아군 2명이 이번 턴에 정신력이 감소한 경우 턴 종료 시 정신력 5 회복<br>"+
            "회복 대상이 화상 위력이나 횟수를 부여하는 기본 스킬을 가지고 있으면, 대신 5 ~ 10 회복" // 서포트 패시브
        },

        skills: {
            skill1: { // 1스킬에 대한 정보들
                skill_name: "염참", // 스킬 명
                type: "나태", // 죄악 속성
                atkType: "참격",
                skill_num: "3", // 스킬 갯수
                skill1_info: "대상의 화상 3 당, 코인 위력 +1 (최대 2)<br>" + "대상의 화상 10 당, 피해량 +10% (최대 30%)<br><br>"
                + "(Ⅰ) [적중시] 화상 1 부여<br>" + "[앞면 적중시] 화상 1 부여", // 스킬에 대한 설명
                def_value: 3, // 기본 위력
                plus_value: 4, // 코인 당 추가 위력
                count_of_coin: 2, // 코인의 갯수
                maxValue: "15", // 고점
                multiple_target: "1" // 공격 가중치 
            },
            skill2: {
                skill_name: "정면돌파", 
                type: "분노",
                atkType: "참격",
                skill_num: "2",
                skill2_info: "대상의 화상 6 당, 코인 위력 +1 (최대 2)<br><br>" + "(Ⅰ) [적중시] 화상 2 부여<br><br>(Ⅱ) [적중시] 화상 2 부여<br><br>(Ⅲ) 대상의 화상당, 피해량 +5% (최대 60%)<br>"
                + "[적중시] 대상의 화상이 6 이상이면, 화상 횟수 2 증가", 
                def_value: 4, 
                plus_value: 4,
                count_of_coin: 3,
                maxValue: "22",
                multiple_target: "1"
            },
            skill3: {
                skill_name: "검의 흐름", 
                type: "질투",
                atkType: "참격",
                skill_num: "1",
                skill3_info: "대상의 화상 6 당, 코인 위력 +1 (최대 2)<br>대상의 화상 6 당, 피해량 +10% (최대 30%)<br>"
                + "<br>[공격 종료시] 자신을 제외한 정신력이 가장 낮은 아군 1명의 정신력 15 회복<br>" +
                " 적을 처치했거나 메인 타겟의 화상이 10 이상이면, 인원 1명 추가<br><br>" + "(Ⅰ) [적중시] 화상 1 부여<br><br>(Ⅱ) [적중시] 화상 1 부여<br><br>(Ⅲ) [적중시] 화상 2 부여"
                + "<br><br>(Ⅳ) 대상의 화상당, 피해량 +2% (최대 60%)<br>[적중 시]대상의 화상 위력만큼 분노 속성 피해를 줌 (최대 30)." +
                " 대상의 화상 횟수 2 감소", 
                def_value: 4, 
                plus_value: 3,
                count_of_coin: 4,
                maxValue: "24",
                multiple_target: "1"
            },
            defense_skill: {
                skill_name: "염반",
                type: "분노",
                def_type: "반격",
                skill_num: "별도 생성",
                def_skill_info: "[피격 직전] 대상의 화상만큼 보호막을 얻음 (최대 15, 턴 당 1회)<br>[사용시] 대상의 화상이 10 이상이면, 피해량 +10%<br><br>"
                + "(Ⅰ) [앞면 적중시] 화상 1 부여<br>자신에게 보호막이 있으면, 화상 1 추가 부여<br><br>(Ⅱ) [앞면 적중시] 화상 1 부여<br>자신에게 보호막이 있으면, 화상 1 추가 부여", // 효과가 없는 경우엔 공백 처리
                def_value: 5, 
                plus_value: 3,
                count_of_coin: 2,
                maxValue: "11",
            }
        }
    },
    {
        name: "[ LCB 수감자 ] 파우스트",
        image: "images/Faust/기본파우.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ W사 2등급 정리 요원 ] 파우스트",
        image: "images/Faust/w파우.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 살아남은 로보토미 직원 ] 파우스트",
        image: "images/Faust/살아남은파우.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 츠바이 협회 4과 ] 파우스트",
        image: "images/Faust/츠파우.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 워더링하이츠 버틀러 ] 파우스트",
        image: "images/Faust/버파우.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 쥐는 자 ] 파우스트",
        image: "images/Faust/쥐파우.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 남부 세븐 협회 4과 ] 파우스트",
        image: "images/Faust/셰파우.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 로보토미 E.G.O::후회 ] 파우스트",
        image: "images/Faust/후파우.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 검계 살수 ] 파우스트",
        image: "images/Faust/검파우.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 멀티크랙 사무소 대표 ] 파우스트",
        image: "images/Faust/멀파우.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ LCB 수감자 ] 돈키호테",
        image: "images/DON QUIXOTE/기본돈키.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 시 협회 5과 부장 ] 돈키호테",
        image: "images/DON QUIXOTE/시돈키.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ N사 중간 망치 ] 돈키호테",
        image: "images/DON QUIXOTE/N돈.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 로보토미 E.G.O::초롱 ] 돈키호테",
        image: "images/DON QUIXOTE/초돈.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 검계 살수 ] 돈키호테",
        image: "images/DON QUIXOTE/검돈.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ W사 3등급 정리 요원 ] 돈키호테",
        image: "images/DON QUIXOTE/w돈.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 섕크 협회 5과 부장 ] 돈키호테",
        image: "images/DON QUIXOTE/섕돈.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 중지 작은 아우 ] 돈키호테",
        image: "images/DON QUIXOTE/중돈.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ T사 3등급 징수직 직원 ] 돈키호테",
        image: "images/DON QUIXOTE/T돈.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ LCB 수감자 ] 료슈",
        image: "images/Ryoshu/기본료슈.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 세븐 협회 6과 ] 료슈",
        image: "images/Ryoshu/세븐료슈.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ LCCB 대리 ] 료슈",
        image: "images/Ryoshu/LCCB료슈.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 리우 협회 4과 ] 료슈",
        image: "images/Ryoshu/리우료슈.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 20구 유로지비 ] 료슈",
        image: "images/Ryoshu/유료슈.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 흑운회 와카슈 ] 료슈",
        image: "images/Ryoshu/흑슈.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 료.고.파. 주방장 ] 료슈",
        image: "images/Ryoshu/료료슈.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ W사 3등급 정리 요원 ] 료슈",
        image: "images/Ryoshu/w료슈.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 에드가 가문 치프 버틀러 ] 료슈",
        image: "images/Ryoshu/넬슈.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 로보토미 E.G.O::적안 · 참회 ] 료슈",
        image: "images/Ryoshu/로료슈.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ LCB 수감자 ] 뫼르소",
        image: "images/MEURSAULT/기본뫼.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 남부 리우 협회 6과 ] 뫼르소",
        image: "images/MEURSAULT/리우뫼.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 장미스패너 공방 해결사 ] 뫼르소",
        image: "images/MEURSAULT/장미뫼.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 중지 작은 아우 ] 뫼르소",
        image: "images/MEURSAULT/중뫼.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 데드레빗츠 보스 ] 뫼르소",
        image: "images/MEURSAULT/데뫼.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ W사 2등급 정리 요원 ] 뫼르소",
        image: "images/MEURSAULT/w뫼.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ N사 큰 망치 ] 뫼르소",
        image: "images/MEURSAULT/N뫼.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ R사 제 4무리 코뿔소팀 ] 뫼르소",
        image: "images/MEURSAULT/코뫼.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 검계 우두머리 ] 뫼르소",
        image: "images/MEURSAULT/검뫼.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 디에치 협회 4과 부장 ] 뫼르소",
        image: "images/MEURSAULT/디뫼.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 서부 섕크 협회 3과 ] 뫼르소",
        image: "images/MEURSAULT/섕뫼.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ LCB 수감자 ] 홍루",
        image: "images/Hong Lu/기본홍루.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 흑운회 와카슈 ] 홍루",
        image: "images/Hong Lu/흑루.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 리우 협회 5과 ] 홍루",
        image: "images/Hong Lu/리홍.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ W사 2등급 정리 요원 ] 홍루",
        image: "images/Hong Lu/W홍.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 갈고리 사무소 해결사 ] 홍루",
        image: "images/Hong Lu/갈루.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 송곳니 사냥 사무소 해결사 ] 홍루",
        image: "images/Hong Lu/송루.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 콩콩이파 두목 ] 홍루",
        image: "images/Hong Lu/콩루.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ K사 3등급 적출직 직원 ] 홍루",
        image: "images/Hong Lu/K루.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 남부 디에치 협회 4과 ] 홍루",
        image: "images/Hong Lu/디루.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 20구 유로지비 ] 홍루",
        image: "images/Hong Lu/유로지비홍루.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 시 협회 5과 ] 히스클리프",
        image: "images/HEATHCLIFF/시히스.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ N사 작은 망치 ] 히스클리프",
        image: "images/HEATHCLIFF/N히스.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 세븐 협회 4과 ] 히스클리프",
        image: "images/HEATHCLIFF/세븐히스.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 멀티크랙 사무소 해결사 ] 히스클리프",
        image: "images/HEATHCLIFF/멀티히스.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ R사 제 4무리 토끼팀 ] 히스클리프",
        image: "images/HEATHCLIFF/R히스.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 로보토미 E.G.O 여우비 ] 히스클리프",
        image: "images/HEATHCLIFF/여히스.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 피쿼드호 작살잡이 ] 히스클리프",
        image: "images/HEATHCLIFF/퀴히스.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 남부 외우피 협회 3과 ] 히스클리프",
        image: "images/HEATHCLIFF/외히스.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 와일드헌트 ] 히스클리프",
        image: "images/HEATHCLIFF/와히스.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ LCB 수감자 ] 이스마엘",
        image: "images/ISMAEL/기본이스.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 남부 시 협회 5과 ] 이스마엘",
        image: "images/ISMAEL/시이스.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ LCCB 대리 ] 이스마엘",
        image: "images/ISMAEL/대리이스.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 로보토미 E.G.O 출렁임 ] 이스마엘",
        image: "images/ISMAEL/출렁임이스.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 에드가 가문 버틀러 ] 이스마엘",
        image: "images/ISMAEL/버이스.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ R사 제 4무리 순록팀 ] 이스마엘",
        image: "images/ISMAEL/R이스.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 남부 리우 협회 4과 ] 이스마엘",
        image: "images/ISMAEL/리우이스.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 어금니 보트 센터 해결사 ] 이스마엘",
        image: "images/ISMAEL/어금니이스.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 피쿼드호 선장 ] 이스마엘",
        image: "images/ISMAEL/선장이스.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 서부 츠바이 협회 3과 ] 이스마엘",
        image: "images/ISMAEL/츠이스.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ LCB 수감자 ] 로쟈",
        image: "images/Rodion/기본로쟈.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ LCCB 대리 ] 로쟈",
        image: "images/Rodion/대리로쟈.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ N사 중간 망치 ] 로쟈",
        image: "images/Rodion/N로쟈.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 츠바이 협회 5과 ] 로쟈",
        image: "images/Rodion/츠로쟈.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ T사 2등급 징수직 직원 ] 로쟈",
        image: "images/Rodion/T로쟈.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 흑운회 와카슈 ] 로쟈",
        image: "images/Rodion/흑로쟈.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 장미스패너 공방 대표 ] 로쟈",
        image: "images/Rodion/장미로쟈.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 남부 디에치 협회 4과 ] 로쟈",
        image: "images/Rodion/디로쟈.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 남부 리우 협회 4과 부장 ] 로쟈",
        image: "images/Rodion/리우로쟈.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 북부 제뱌찌 협회 3과 ] 로쟈",
        image: "images/Rodion/제로쟈.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ LCB 수감자 ] 싱클레어",
        image: "images/SINCLAIR/기본싱클.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 남부 츠바이 협회 6과 ] 싱클레어",
        image: "images/SINCLAIR/츠싱클.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 마리아치 보스 ] 싱클레어",
        image: "images/SINCLAIR/마리아치싱클.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 로보토미 E.G.O 홍적 ] 싱클레어",
        image: "images/SINCLAIR/홍적싱클.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 어금니 보트 센터 해결사 ] 싱클레어",
        image: "images/SINCLAIR/어금니싱클.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 서부 츠바이 협회 3과 ] 싱클레어",
        image: "images/SINCLAIR/서부츠바이싱클.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 검계 살수 ] 싱클레어",
        image: "images/SINCLAIR/검싱.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 쥐어들 자 ] 싱클레어",
        image: "images/SINCLAIR/쥐싱.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 남부 섕크 협회 4과 부장 ] 싱클레어",
        image: "images/SINCLAIR/섕싱.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 새벽 사무소 해결사 ] 싱클레어",
        image: "images/SINCLAIR/필싱.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ LCB 수감자 ] 오티스",
        image: "images/OTIS/기본오티스.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 검계 살수 ] 오티스",
        image: "images/OTIS/검티스.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ G사 부장 ] 오티스",
        image: "images/OTIS/G티스.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 섕크 협회 4과 ] 오티스",
        image: "images/OTIS/섕티스.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 약지 점묘파 스튜던트 ] 오티스",
        image: "images/OTIS/약티스.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 세븐 협회 6과 부장 ] 오티스",
        image: "images/OTIS/세티스.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 어금니 사무소 해결사 ] 오티스",
        image: "images/OTIS/어금니오티스.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 로보토미 E.G.O::마탄 ] 오티스",
        image: "images/OTIS/마탄오티스.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 워더링하이츠 치프 버틀러 ] 오티스",
        image: "images/OTIS/버틀러오티스.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ W사 3등급 정리 요원 팀장 ] 오티스",
        image: "images/OTIS/W티스.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 라만차랜드 이발사 ] 오티스",
        image: "images/OTIS/혈티스.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ LCB 수감자 ] 그레고르",
        image: "images/GreGor/기본그렉.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 리우 협회 6과 ] 그레고르",
        image: "images/GreGor/리우그렉.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 료.고.파. 조수 ] 그레고르",
        image: "images/GreGor/요그렉.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 장미스패너 공방 해결사 ] 그레고르",
        image: "images/GreGor/장미그렉.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 흑운회 부조장 ] 그레고르",
        image: "images/GreGor/흑그렉.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ G사 일등대리 ] 그레고르",
        image: "images/GreGor/G그렉.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 츠바이 협회 4과 ] 그레고르",
        image: "images/GreGor/츠그렉.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 쌍갈고리 해적단 부선장 ] 그레고르",
        image: "images/GreGor/갈그렉.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 에드가 가문 승계자 ] 그레고르",
        image: "images/GreGor/퐁그렉.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
];

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const searchSuggestions = document.getElementById("search-suggestions"); // HTML에서 미리 만들어놓기

    // 🔹 추천 검색어 기능 (input 이벤트)
    searchInput.addEventListener("input", function () {
        const query = searchInput.value.trim().toLowerCase();
        searchSuggestions.innerHTML = ""; // 기존 추천어 삭제

        if (!query) {
            searchSuggestions.style.display = "none";
            return;
        }

        // 🔹 검색어 포함된 캐릭터 필터링
        const filteredCharacters = characters.filter((char) =>
            char.name.toLowerCase().includes(query)
        );

        if (filteredCharacters.length > 0) {
            searchSuggestions.style.display = "block";
            filteredCharacters.forEach((char) => {
                const suggestion = document.createElement("div");
                suggestion.innerText = char.name;
                suggestion.classList.add("suggestion-item");

                // 🔹 추천어 클릭 시 검색 실행
                suggestion.addEventListener("click", function () {
                    searchInput.value = char.name;
                    searchSuggestions.style.display = "none";
                    displayCharacterInfo(char);
                });

                searchSuggestions.appendChild(suggestion);
            });
        } else {
            searchSuggestions.style.display = "none";
        }
    });

    searchButton.addEventListener("click", function () {
        const selectedCharacter = characters.find(
            (char) => char.name === searchInput.value
        );

        if (selectedCharacter) {
            displayCharacterInfo(selectedCharacter);
        } else {
            alert("다시 검색해 주세요!");
        }
    });

    document.addEventListener("click", function (event) {
        if (!searchInput.contains(event.target) && !searchSuggestions.contains(event.target)) {
            searchSuggestions.style.display = "none";
        }
    });
});

function displayCharacterInfo(character) {
    document.getElementById('character-name').innerText = character.name;
    document.getElementById('character-image').src = character.image;

    document.getElementById('slash-resistance').innerText = character.resistances.slash;
    document.getElementById('pierce-resistance').innerText = character.resistances.pierce;
    document.getElementById('blunt-resistance').innerText = character.resistances.blunt;

    document.getElementById('hp').innerText = character.stats.hp;
    document.getElementById('unFightGauge').innerText = character.stats.unfightGauge;
    document.getElementById('speed').innerText = character.stats.speed;

    setupSkillPassiveToggle(character);
    setStyleColorResi(character);
    setupSkillButtons(character);
}

function setupSkillPassiveToggle(character) {
    const skillSection = document.getElementById('skills-section');
    const passiveSection = document.getElementById('passive-section');

    document.getElementById('toggle-skills').addEventListener('click', function() {
        skillSection.style.display = 'block';
        passiveSection.style.display = 'none';
    });

    document.getElementById('toggle-passives').addEventListener('click', function() {
        skillSection.style.display = 'none';
        passiveSection.style.display = 'block';
        displayPassiveInfo(character);
    });

    displaySkillInfo(character, 'skill1');
}

function setupSkillButtons(character) {
    const skillButtons = document.querySelectorAll('.skill-btn');
    skillButtons.forEach(button => {
        button.addEventListener('click', function() {
            const skillKey = this.getAttribute('data-skill');
            if (skillKey === 'defense') {
                displaySkillInfo(character, 'defense_skill');
            } else {
                displaySkillInfo(character, `skill${skillKey}`);
            }
        });
    });
}

function displaySkillInfo(character, skillKey) {
    const skill = character.skills[skillKey];
    if (!skill) return;

    const skillDetails = document.getElementById('skill-info');
    skillDetails.innerHTML = `
        <div class="skill-title">
            <h3>${skill.skill_name}</h3>
            <span id="c-type">죄악 속성: ${skill.type} (x${skill.skill_num})</span>
        </div>
        <p class="skill-I-Data" style="color: white;"> ${highlightKeywords(skill.skill1_info || skill.skill2_info || skill.skill3_info || skill.def_skill_info)}</p>
        <div class="skill-power">
            <div>
                기본 위력: ${skill.def_value}
                코인 위력: ${skill.plus_value}
                코인 개수: ${skill.count_of_coin} <br><br>
                최종위력: ${Math.abs(skill.def_value + (skill.plus_value * skill.count_of_coin))}
                고점: ${skill.maxValue}
            </div>
    `;
    const skillTypeElement = document.getElementById("c-type");
    setStyleColorAtk(skillTypeElement, skill.type);
}

function setStyleColorAtk(skillTypeElement, skillType) {
    const atkColors = {
        "분노": "#fd0101",
        "색욕": "#fc9802",
        "나태": "#feea3e",
        "탐식": "#72fc16",
        "우울": "#49d4f7",
        "오만": "#073cfc",
        "질투": "#9207fc"
    };
    skillTypeElement.style.color = atkColors[skillType] || "#ffffff"; // 기본값 흰색
}

function highlightKeywords(text) {
    const keywordColors = { 
        "출혈": "#fd0101", 
        "화상": "#fc9802", 
        "진동": "#feea3e", 
        "파열": "#72fc16", 
        "침잠": "#49d4f7", 
        "호흡": "#073cfc", 
        "충전": "#9207fc",
        // 키워드 이외 텍스트 강조
        // "적중시": "#90EE90",
        // "회피 성공 시": "#90EE90",
        // "공격 시작 전": "#90EE90",
        // "전투 시작시": "#90EE90",
        // "앞면 적중시": "#90EE90",
        // "크리티컬 적중시": "#90EE90",
        // "사용시": "#87CEEB",
        // "합 패배": "#Ff0000",
        // "미끼 요정": "#FF0000",
        // "합 승리시": "#FFA500",
        // "도발치": "#A52A2A",
        // "파괴 불가 코인": "#A52A2A",
        // "탐구한 지식": "#A52A2A",
        // "버림": "#A52A2A"
    };

    // |적중시|회피 성공 시|공격 시작 전|전투 시작시|앞면 적중시|크리티컬 적중시|사용시|합 패배|합 승리시|도발치|파괴 불가 코인|탐구한 지식|버림
    // 정규식을 사용하여 키워드를 찾아 변환
    return text.replace(/(충전 역장|침잠쇄도|출혈|화상|진동|파열|침잠|호흡|충전|버림|탐구한 지식|파괴 불가 코인|미끼 요정|차원 균열)/g, (match) => {
        const color = keywordColors[match];
        return `<span style="color: ${color}; font-weight: bold;">
                    <img src="icons/${match}.png" alt="" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 1px;">
                    ${match}
                </span>`;
    });
}
   
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const searchSuggestions = document.getElementById("search-suggestions"); // HTML에서 미리 만들어놓기

    // 🔹 추천 검색어 기능 (input 이벤트)
    searchInput.addEventListener("input", function () {
        const query = searchInput.value.trim().toLowerCase();
        searchSuggestions.innerHTML = ""; // 기존 추천어 삭제

        if (!query) {
            searchSuggestions.style.display = "none";
            return;
        }

        // 🔹 검색어 포함된 캐릭터 필터링
        const filteredCharacters = characters.filter((char) =>
            char.name.toLowerCase().includes(query)
        );

        if (filteredCharacters.length > 0) {
            searchSuggestions.style.display = "block";
            filteredCharacters.forEach((char) => {
                const suggestion = document.createElement("div");
                suggestion.innerText = char.name;
                suggestion.classList.add("suggestion-item");

                // 🔹 추천어 클릭 시 검색 실행
                suggestion.addEventListener("click", function () {
                    searchInput.value = char.name;
                    searchSuggestions.style.display = "none";
                    displayCharacterInfo(char);
                });

                searchSuggestions.appendChild(suggestion);
            });
        } else {
            searchSuggestions.style.display = "none";
        }
    });

    searchButton.addEventListener("click", function () {
        const selectedCharacter = characters.find(
            (char) => char.name === searchInput.value
        );

        if (selectedCharacter) {
            displayCharacterInfo(selectedCharacter);
        } else {
            alert("다시 검색해 주세요!");
        }
    });

    document.addEventListener("click", function (event) {
        if (!searchInput.contains(event.target) && !searchSuggestions.contains(event.target)) {
            searchSuggestions.style.display = "none";
        }
    });
});

function displayCharacterInfo(character) {
    document.getElementById('character-name').innerText = character.name;
    document.getElementById('character-image').src = character.image;

    document.getElementById('slash-resistance').innerText = character.resistances.slash;
    document.getElementById('pierce-resistance').innerText = character.resistances.pierce;
    document.getElementById('blunt-resistance').innerText = character.resistances.blunt;

    document.getElementById('hp').innerText = character.stats.hp;
    document.getElementById('unFightGauge').innerText = character.stats.unfightGauge;
    document.getElementById('speed').innerText = character.stats.speed;

    setupSkillPassiveToggle(character);
    setStyleColorResi(character);
    setupSkillButtons(character);
}

function setupSkillPassiveToggle(character) {
    const skillSection = document.getElementById('skills-section');
    const passiveSection = document.getElementById('passive-section');

    document.getElementById('toggle-skills').addEventListener('click', function() {
        skillSection.style.display = 'block';
        passiveSection.style.display = 'none';
    });

    document.getElementById('toggle-passives').addEventListener('click', function() {
        skillSection.style.display = 'none';
        passiveSection.style.display = 'block';
        displayPassiveInfo(character);
    });

    displaySkillInfo(character, 'skill1');
}

function setupSkillButtons(character) {
    const skillButtons = document.querySelectorAll('.skill-btn');
    skillButtons.forEach(button => {
        button.addEventListener('click', function() {
            const skillKey = this.getAttribute('data-skill');
            if (skillKey === 'defense') {
                displaySkillInfo(character, 'defense_skill');
            } else {
                displaySkillInfo(character, `skill${skillKey}`);
            }
        });
    });
}

function displaySkillInfo(character, skillKey) {
    const skill = character.skills[skillKey];
    if (!skill) return;

    const skillDetails = document.getElementById('skill-info');
    skillDetails.innerHTML = `
        <div class="skill-title">
            <h3>${skill.skill_name}</h3>
            <span id="c-type">죄악 속성: ${skill.type} (x${skill.skill_num})</span>
        </div>
        <p class="skill-I-Data" style="color: white;"> ${highlightKeywords(skill.skill1_info || skill.skill2_info || skill.skill3_info || skill.def_skill_info)}</p>
        <div class="skill-power">
            <div>
                기본 위력: ${skill.def_value}
                코인 위력: ${skill.plus_value}
                코인 개수: ${skill.count_of_coin} <br><br>
                최종위력: ${Math.abs(skill.def_value + (skill.plus_value * skill.count_of_coin))}
                고점: ${skill.maxValue}
            </div>
    `;
    const skillTypeElement = document.getElementById("c-type");
    setStyleColorAtk(skillTypeElement, skill.type);
}

function setStyleColorAtk(skillTypeElement, skillType) {
    const atkColors = {
        "분노": "#fd0101",
        "색욕": "#fc9802",
        "나태": "#feea3e",
        "탐식": "#72fc16",
        "우울": "#49d4f7",
        "오만": "#073cfc",
        "질투": "#9207fc"
    };
    skillTypeElement.style.color = atkColors[skillType] || "#ffffff"; // 기본값 흰색
}

function highlightKeywords(text) {
    const keywordColors = { 
        "출혈": "#fd0101", 
        "화상": "#fc9802", 
        "진동": "#feea3e", 
        "파열": "#72fc16", 
        "침잠": "#49d4f7", 
        "호흡": "#073cfc", 
        "충전": "#9207fc",
        // 키워드 이외 텍스트 강조
        // "적중시": "#90EE90",
        // "회피 성공 시": "#90EE90",
        // "공격 시작 전": "#90EE90",
        // "전투 시작시": "#90EE90",
        // "앞면 적중시": "#90EE90",
        // "크리티컬 적중시": "#90EE90",
        // "사용시": "#87CEEB",
        // "합 패배": "#Ff0000",
        // "미끼 요정": "#FF0000",
        // "합 승리시": "#FFA500",
        // "도발치": "#A52A2A",
        // "파괴 불가 코인": "#A52A2A",
        // "탐구한 지식": "#A52A2A",
        // "버림": "#A52A2A"
    };

    // |적중시|회피 성공 시|공격 시작 전|전투 시작시|앞면 적중시|크리티컬 적중시|사용시|합 패배|합 승리시|도발치|파괴 불가 코인|탐구한 지식|버림
    // 정규식을 사용하여 키워드를 찾아 변환
    return text.replace(/(충전 역장|침잠쇄도|출혈|화상|진동|파열|침잠|호흡|충전|버림|탐구한 지식|파괴 불가 코인|미끼 요정|차원 균열|산나비·죽은나비|나비|취약|마비|신속|속박)/g, (match) => {
        const color = keywordColors[match];
        return `<span style="color: ${color}; font-weight: bold;">
                    <img src="icons/${match}.png" alt="" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 1px;">
                    ${match}
                </span>`;
    });
}
   
function displayPassiveInfo(character) {
    const passiveDetails = document.getElementById('passive-section');
    passiveDetails.innerHTML = ""; // 기존 내용 초기화

    // 🔹 첫 번째 패시브 출력
    if (character.passives.passive_name && character.passives.passive) {
        passiveDetails.innerHTML += `
            <p style="font-weight: bold; color: darkorange;">패시브 1: <span>${character.passives.passive_name}</span></p>
            <p>${character.passives.passive}</p>
        `;
    }

    // 🔹 두 번째 패시브 출력 (있을 경우)
    if (character.passives.passive_name2 && character.passives.passive2) {
        passiveDetails.innerHTML += `
            <p style="font-weight: bold; color: darkorange;">패시브 2: <span>${character.passives.passive_name2}</span></p>
            <p>${character.passives.passive2}</p>
        `;
    }

    // 🔹 세 번째 패시브 출력 (혹시 있을 경우)
    if (character.passives.passive_name3 && character.passives.passive3) {
        passiveDetails.innerHTML += `
            <p style="font-weight: bold; color: darkorange;">패시브 3: <span>${character.passives.passive_name3}</span></p>
            <p>${character.passives.passive3}</p>
        `;
    }

    // 🔹 서포트 패시브 출력
    if (character.passives.supassive_name && character.passives.support_passive) {
        passiveDetails.innerHTML += `
            <p style="font-weight: bold; color: darkorange;">서포트 패시브: <span>${character.passives.supassive_name}</span></p>
            <p>${character.passives.support_passive}</p>
        `;
    }
}




function setStyleColorResi(selectedCharacter) {
    const resistanceColors = {
        "취약": "#f27287",
        "보통": "#ffffff",
        "내성": "#bfbfbf"
    };
    document.getElementById("slash-resistance").style.color = resistanceColors[selectedCharacter.resistances.slash];
    document.getElementById("pierce-resistance").style.color = resistanceColors[selectedCharacter.resistances.pierce];
    document.getElementById("blunt-resistance").style.color = resistanceColors[selectedCharacter.resistances.blunt];
}




function setStyleColorResi(selectedCharacter) {
    const resistanceColors = {
        "취약": "#f27287",
        "보통": "#ffffff",
        "내성": "#bfbfbf"
    };
    document.getElementById("slash-resistance").style.color = resistanceColors[selectedCharacter.resistances.slash];
    document.getElementById("pierce-resistance").style.color = resistanceColors[selectedCharacter.resistances.pierce];
    document.getElementById("blunt-resistance").style.color = resistanceColors[selectedCharacter.resistances.blunt];
}
