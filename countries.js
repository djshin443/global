// 전 세계 195개국 국가 데이터
const countries = [
// 아시아 (48개국)
{ code: ‘kr’, name: ‘한국’, capital: ‘서울’, continent: ‘asia’, flag: ‘🇰🇷’ },
{ code: ‘kp’, name: ‘북한’, capital: ‘평양’, continent: ‘asia’, flag: ‘🇰🇵’ },
{ code: ‘jp’, name: ‘일본’, capital: ‘도쿄’, continent: ‘asia’, flag: ‘🇯🇵’ },
{ code: ‘cn’, name: ‘중국’, capital: ‘베이징’, continent: ‘asia’, flag: ‘🇨🇳’ },
{ code: ‘in’, name: ‘인도’, capital: ‘뉴델리’, continent: ‘asia’, flag: ‘🇮🇳’ },
{ code: ‘id’, name: ‘인도네시아’, capital: ‘자카르타’, continent: ‘asia’, flag: ‘🇮🇩’ },
{ code: ‘th’, name: ‘태국’, capital: ‘방콕’, continent: ‘asia’, flag: ‘🇹🇭’ },
{ code: ‘vn’, name: ‘베트남’, capital: ‘하노이’, continent: ‘asia’, flag: ‘🇻🇳’ },
{ code: ‘ph’, name: ‘필리핀’, capital: ‘마닐라’, continent: ‘asia’, flag: ‘🇵🇭’ },
{ code: ‘my’, name: ‘말레이시아’, capital: ‘쿠알라룸푸르’, continent: ‘asia’, flag: ‘🇲🇾’ },
{ code: ‘sg’, name: ‘싱가포르’, capital: ‘싱가포르’, continent: ‘asia’, flag: ‘🇸🇬’ },
{ code: ‘mm’, name: ‘미얀마’, capital: ‘네피도’, continent: ‘asia’, flag: ‘🇲🇲’ },
{ code: ‘kh’, name: ‘캄보디아’, capital: ‘프놈펜’, continent: ‘asia’, flag: ‘🇰🇭’ },
{ code: ‘la’, name: ‘라오스’, capital: ‘비엔티안’, continent: ‘asia’, flag: ‘🇱🇦’ },
{ code: ‘bn’, name: ‘브루나이’, capital: ‘반다르세리베가완’, continent: ‘asia’, flag: ‘🇧🇳’ },
{ code: ‘tl’, name: ‘동티모르’, capital: ‘딜리’, continent: ‘asia’, flag: ‘🇹🇱’ },
{ code: ‘pk’, name: ‘파키스탄’, capital: ‘이슬라마바드’, continent: ‘asia’, flag: ‘🇵🇰’ },
{ code: ‘bd’, name: ‘방글라데시’, capital: ‘다카’, continent: ‘asia’, flag: ‘🇧🇩’ },
{ code: ‘lk’, name: ‘스리랑카’, capital: ‘콜롬보’, continent: ‘asia’, flag: ‘🇱🇰’ },
{ code: ‘mv’, name: ‘몰디브’, capital: ‘말레’, continent: ‘asia’, flag: ‘🇲🇻’ },
{ code: ‘af’, name: ‘아프가니스탄’, capital: ‘카불’, continent: ‘asia’, flag: ‘🇦🇫’ },
{ code: ‘ir’, name: ‘이란’, capital: ‘테헤란’, continent: ‘asia’, flag: ‘🇮🇷’ },
{ code: ‘iq’, name: ‘이라크’, capital: ‘바그다드’, continent: ‘asia’, flag: ‘🇮🇶’ },
{ code: ‘tr’, name: ‘터키’, capital: ‘앙카라’, continent: ‘asia’, flag: ‘🇹🇷’ },
{ code: ‘sa’, name: ‘사우디아라비아’, capital: ‘리야드’, continent: ‘asia’, flag: ‘🇸🇦’ },
{ code: ‘ae’, name: ‘아랍에미리트’, capital: ‘아부다비’, continent: ‘asia’, flag: ‘🇦🇪’ },
{ code: ‘qa’, name: ‘카타르’, capital: ‘도하’, continent: ‘asia’, flag: ‘🇶🇦’ },
{ code: ‘kw’, name: ‘쿠웨이트’, capital: ‘쿠웨이트시티’, continent: ‘asia’, flag: ‘🇰🇼’ },
{ code: ‘bh’, name: ‘바레인’, capital: ‘마나마’, continent: ‘asia’, flag: ‘🇧🇭’ },
{ code: ‘om’, name: ‘오만’, capital: ‘무스카트’, continent: ‘asia’, flag: ‘🇴🇲’ },
{ code: ‘ye’, name: ‘예멘’, capital: ‘사나’, continent: ‘asia’, flag: ‘🇾🇪’ },
{ code: ‘jo’, name: ‘요단’, capital: ‘암만’, continent: ‘asia’, flag: ‘🇯🇴’ },
{ code: ‘il’, name: ‘이스라엘’, capital: ‘예루살렘’, continent: ‘asia’, flag: ‘🇮🇱’ },
{ code: ‘ps’, name: ‘팔레스타인’, capital: ‘라말라’, continent: ‘asia’, flag: ‘🇵🇸’ },
{ code: ‘lb’, name: ‘레바논’, capital: ‘베이루트’, continent: ‘asia’, flag: ‘🇱🇧’ },
{ code: ‘sy’, name: ‘시리아’, capital: ‘다마스쿠스’, continent: ‘asia’, flag: ‘🇸🇾’ },
{ code: ‘cy’, name: ‘키프로스’, capital: ‘니코시아’, continent: ‘asia’, flag: ‘🇨🇾’ },
{ code: ‘am’, name: ‘아르메니아’, capital: ‘예레반’, continent: ‘asia’, flag: ‘🇦🇲’ },
{ code: ‘az’, name: ‘아제르바이잔’, capital: ‘바쿠’, continent: ‘asia’, flag: ‘🇦🇿’ },
{ code: ‘ge’, name: ‘조지아’, capital: ‘트빌리시’, continent: ‘asia’, flag: ‘🇬🇪’ },
{ code: ‘kz’, name: ‘카자흐스탄’, capital: ‘누르술탄’, continent: ‘asia’, flag: ‘🇰🇿’ },
{ code: ‘kg’, name: ‘키르기스스탄’, capital: ‘비슈케크’, continent: ‘asia’, flag: ‘🇰🇬’ },
{ code: ‘tj’, name: ‘타지키스탄’, capital: ‘두샨베’, continent: ‘asia’, flag: ‘🇹🇯’ },
{ code: ‘tm’, name: ‘투르크메니스탄’, capital: ‘아시가바트’, continent: ‘asia’, flag: ‘🇹🇲’ },
{ code: ‘uz’, name: ‘우즈베키스탄’, capital: ‘타슈켄트’, continent: ‘asia’, flag: ‘🇺🇿’ },
{ code: ‘mn’, name: ‘몽골’, capital: ‘울란바토르’, continent: ‘asia’, flag: ‘🇲🇳’ },
{ code: ‘np’, name: ‘네팔’, capital: ‘카트만두’, continent: ‘asia’, flag: ‘🇳🇵’ },
{ code: ‘bt’, name: ‘부탄’, capital: ‘팀푸’, continent: ‘asia’, flag: ‘🇧🇹’ },

```
// 유럽 (44개국)
{ code: 'ru', name: '러시아', capital: '모스크바', continent: 'europe', flag: '🇷🇺' },
{ code: 'de', name: '독일', capital: '베를린', continent: 'europe', flag: '🇩🇪' },
{ code: 'fr', name: '프랑스', capital: '파리', continent: 'europe', flag: '🇫🇷' },
{ code: 'gb', name: '영국', capital: '런던', continent: 'europe', flag: '🇬🇧' },
{ code: 'it', name: '이탈리아', capital: '로마', continent: 'europe', flag: '🇮🇹' },
{ code: 'es', name: '스페인', capital: '마드리드', continent: 'europe', flag: '🇪🇸' },
{ code: 'ua', name: '우크라이나', capital: '키이우', continent: 'europe', flag: '🇺🇦' },
{ code: 'pl', name: '폴란드', capital: '바르샤바', continent: 'europe', flag: '🇵🇱' },
{ code: 'ro', name: '루마니아', capital: '부쿠레슈티', continent: 'europe', flag: '🇷🇴' },
{ code: 'nl', name: '네덜란드', capital: '암스테르담', continent: 'europe', flag: '🇳🇱' },
{ code: 'be', name: '벨기에', capital: '브뤼셀', continent: 'europe', flag: '🇧🇪' },
{ code: 'cz', name: '체코', capital: '프라하', continent: 'europe', flag: '🇨🇿' },
{ code: 'gr', name: '그리스', capital: '아테네', continent: 'europe', flag: '🇬🇷' },
{ code: 'pt', name: '포르투갈', capital: '리스본', continent: 'europe', flag: '🇵🇹' },
{ code: 'hu', name: '헝가리', capital: '부다페스트', continent: 'europe', flag: '🇭🇺' },
{ code: 'by', name: '벨라루스', capital: '민스크', continent: 'europe', flag: '🇧🇾' },
{ code: 'at', name: '오스트리아', capital: '비엔나', continent: 'europe', flag: '🇦🇹' },
{ code: 'rs', name: '세르비아', capital: '베오그라드', continent: 'europe', flag: '🇷🇸' },
{ code: 'ch', name: '스위스', capital: '베른', continent: 'europe', flag: '🇨🇭' },
{ code: 'bg', name: '불가리아', capital: '소피아', continent: 'europe', flag: '🇧🇬' },
{ code: 'sk', name: '슬로바키아', capital: '브라티슬라바', continent: 'europe', flag: '🇸🇰' },
{ code: 'dk', name: '덴마크', capital: '코펜하겐', continent: 'europe', flag: '🇩🇰' },
{ code: 'fi', name: '핀란드', capital: '헬싱키', continent: 'europe', flag: '🇫🇮' },
{ code: 'se', name: '스웨덴', capital: '스톡홀름', continent: 'europe', flag: '🇸🇪' },
{ code: 'no', name: '노르웨이', capital: '오슬로', continent: 'europe', flag: '🇳🇴' },
{ code: 'ie', name: '아일랜드', capital: '더블린', continent: 'europe', flag: '🇮🇪' },
{ code: 'hr', name: '크로아티아', capital: '자그레브', continent: 'europe', flag: '🇭🇷' },
{ code: 'ba', name: '보스니아헤르체고비나', capital: '사라예보', continent: 'europe', flag: '🇧🇦' },
{ code: 'si', name: '슬로베니아', capital: '류블랴나', continent: 'europe', flag: '🇸🇮' },
{ code: 'lt', name: '리투아니아', capital: '빌뉴스', continent: 'europe', flag: '🇱🇹' },
{ code: 'lv', name: '라트비아', capital: '리가', continent: 'europe', flag: '🇱🇻' },
{ code: 'ee', name: '에스토니아', capital: '탈린', continent: 'europe', flag: '🇪🇪' },
{ code: 'md', name: '몰도바', capital: '키시너우', continent: 'europe', flag: '🇲🇩' },
{ code: 'al', name: '알바니아', capital: '티라나', continent: 'europe', flag: '🇦🇱' },
{ code: 'mk', name: '북마케도니아', capital: '스코페', continent: 'europe', flag: '🇲🇰' },
{ code: 'me', name: '몬테네그로', capital: '포드고리차', continent: 'europe', flag: '🇲🇪' },
{ code: 'is', name: '아이슬란드', capital: '레이캬비크', continent: 'europe', flag: '🇮🇸' },
{ code: 'lu', name: '룩셈부르크', capital: '룩셈부르크', continent: 'europe', flag: '🇱🇺' },
{ code: 'mt', name: '몰타', capital: '발레타', continent: 'europe', flag: '🇲🇹' },
{ code: 'ad', name: '안도라', capital: '안도라라베야', continent: 'europe', flag: '🇦🇩' },
{ code: 'li', name: '리히텐슈타인', capital: '파두츠', continent: 'europe', flag: '🇱🇮' },
{ code: 'mc', name: '모나코', capital: '모나코', continent: 'europe', flag: '🇲🇨' },
{ code: 'sm', name: '산마리노', capital: '산마리노', continent: 'europe', flag: '🇸🇲' },
{ code: 'va', name: '바티칸', capital: '바티칸', continent: 'europe', flag: '🇻🇦' },

// 아프리카 (54개국)
{ code: 'ng', name: '나이지리아', capital: '아부자', continent: 'africa', flag: '🇳🇬' },
{ code: 'et', name: '에티오피아', capital: '아디스아바바', continent: 'africa', flag: '🇪🇹' },
{ code: 'eg', name: '이집트', capital: '카이로', continent: 'africa', flag: '🇪🇬' },
{ code: 'za', name: '남아프리카공화국', capital: '케이프타운', continent: 'africa', flag: '🇿🇦' },
{ code: 'ke', name: '케냐', capital: '나이로비', continent: 'africa', flag: '🇰🇪' },
{ code: 'ug', name: '우간다', capital: '캄팔라', continent: 'africa', flag: '🇺🇬' },
{ code: 'dz', name: '알제리', capital: '알제', continent: 'africa', flag: '🇩🇿' },
{ code: 'sd', name: '수단', capital: '하르툼', continent: 'africa', flag: '🇸🇩' },
{ code: 'ma', name: '모로코', capital: '라바트', continent: 'africa', flag: '🇲🇦' },
{ code: 'ao', name: '앙골라', capital: '루안다', continent: 'africa', flag: '🇦🇴' },
{ code: 'mz', name: '모잠비크', capital: '마푸토', continent: 'africa', flag: '🇲🇿' },
{ code: 'mg', name: '마다가스카르', capital: '안타나나리보', continent: 'africa', flag: '🇲🇬' },
{ code: 'cm', name: '카메룬', capital: '야운데', continent: 'africa', flag: '🇨🇲' },
{ code: 'ci', name: '코트디부아르', capital: '야무스크로', continent: 'africa', flag: '🇨🇮' },
{ code: 'ne', name: '니제르', capital: '니아메', continent: 'africa', flag: '🇳🇪' },
{ code: 'bf', name: '부르키나파소', capital: '와가두구', continent: 'africa', flag: '🇧🇫' },
{ code: 'ml', name: '말리', capital: '바마코', continent: 'africa', flag: '🇲🇱' },
{ code: 'mw', name: '말라위', capital: '릴롱궤', continent: 'africa', flag: '🇲🇼' },
{ code: 'zm', name: '잠비아', capital: '루사카', continent: 'africa', flag: '🇿🇲' },
{ code: 'sn', name: '세네갈', capital: '다카르', continent: 'africa', flag: '🇸🇳' },
{ code: 'so', name: '소말리아', capital: '모가디슈', continent: 'africa', flag: '🇸🇴' },
{ code: 'rw', name: '르완다', capital: '키갈리', continent: 'africa', flag: '🇷🇼' },
{ code: 'tn', name: '튀니지', capital: '튀니스', continent: 'africa', flag: '🇹🇳' },
{ code: 'tz', name: '탄자니아', capital: '도도마', continent: 'africa', flag: '🇹🇿' },
{ code: 'ly', name: '리비아', capital: '트리폴리', continent: 'africa', flag: '🇱🇾' },
{ code: 'lr', name: '라이베리아', capital: '몬로비아', continent: 'africa', flag: '🇱🇷' },
{ code: 'cd', name: '콩고민주공화국', capital: '킨샤사', continent: 'africa', flag: '🇨🇩' },
{ code: 'cg', name: '콩고공화국', capital: '브라자빌', continent: 'africa', flag: '🇨🇬' },
{ code: 'cf', name: '중앙아프리카공화국', capital: '방기', continent: 'africa', flag: '🇨🇫' },
{ code: 'td', name: '차드', capital: "은자메나", continent: 'africa', flag: '🇹🇩' },
{ code: 'er', name: '에리트레아', capital: '아스마라', continent: 'africa', flag: '🇪🇷' },
{ code: 'dj', name: '지부티', capital: '지부티', continent: 'africa', flag: '🇩🇯' },
{ code: 'bi', name: '부룬디', capital: '기테가', continent: 'africa', flag: '🇧🇮' },
{ code: 'gn', name: '기니', capital: '코나크리', continent: 'africa', flag: '🇬🇳' },
{ code: 'sl', name: '시에라리온', capital: '프리타운', continent: 'africa', flag: '🇸🇱' },
{ code: 'tg', name: '토고', capital: '로메', continent: 'africa', flag: '🇹🇬' },
{ code: 'bj', name: '베냉', capital: '포르토노보', continent: 'africa', flag: '🇧🇯' },
{ code: 'gh', name: '가나', capital: '아크라', continent: 'africa', flag: '🇬🇭' },
{ code: 'ga', name: '가봉', capital: '리브르빌', continent: 'africa', flag: '🇬🇦' },
{ code: 'gq', name: '적도기니', capital: '말라보', continent: 'africa', flag: '🇬🇶' },
{ code: 'st', name: '상투메프린시페', capital: '상투메', continent: 'africa', flag: '🇸🇹' },
{ code: 'cv', name: '카보베르데', capital: '프라이아', continent: 'africa', flag: '🇨🇻' },
{ code: 'mr', name: '모리타니', capital: '누악쇼트', continent: 'africa', flag: '🇲🇷' },
{ code: 'gm', name: '감비아', capital: '반줄', continent: 'africa', flag: '🇬🇲' },
{ code: 'gw', name: '기니비사우', capital: '비사우', continent: 'africa', flag: '🇬🇼' },
{ code: 'sl', name: '시에라리온', capital: '프리타운', continent: 'africa', flag: '🇸🇱' },
{ code: 'ls', name: '레소토', capital: '마세루', continent: 'africa', flag: '🇱🇸' },
{ code: 'bw', name: '보츠와나', capital: '가보로네', continent: 'africa', flag: '🇧🇼' },
{ code: 'na', name: '나미비아', capital: '빈트후크', continent: 'africa', flag: '🇳🇦' },
{ code: 'sz', name: '에스와티니', capital: '음바바네', continent: 'africa', flag: '🇸🇿' },
{ code: 'zw', name: '짐바브웨', capital: '하라레', continent: 'africa', flag: '🇿🇼' },
{ code: 'mu', name: '모리셔스', capital: '포트루이스', continent: 'africa', flag: '🇲🇺' },
{ code: 'sc', name: '세이셸', capital: '빅토리아', continent: 'africa', flag: '🇸🇨' },
{ code: 'km', name: '코모로', capital: '모로니', continent: 'africa', flag: '🇰🇲' },

// 북아메리카 (23개국)
{ code: 'us', name: '미국', capital: '워싱턴 D.C.', continent: 'america', flag: '🇺🇸' },
{ code: 'ca', name: '캐나다', capital: '오타와', continent: 'america', flag: '🇨🇦' },
{ code: 'mx', name: '멕시코', capital: '멕시코시티', continent: 'america', flag: '🇲🇽' },
{ code: 'gt', name: '과테말라', capital: '과테말라시티', continent: 'america', flag: '🇬🇹' },
{ code: 'bz', name: '벨리즈', capital: '벨모판', continent: 'america', flag: '🇧🇿' },
{ code: 'sv', name: '엘살바도르', capital: '산살바도르', continent: 'america', flag: '🇸🇻' },
{ code: 'hn', name: '온두라스', capital: '테구시갈파', continent: 'america', flag: '🇭🇳' },
{ code: 'ni', name: '니카라과', capital: '마나과', continent: 'america', flag: '🇳🇮' },
{ code: 'cr', name: '코스타리카', capital: '산호세', continent: 'america', flag: '🇨🇷' },
{ code: 'pa', name: '파나마', capital: '파나마시티', continent: 'america', flag: '🇵🇦' },
{ code: 'cu', name: '쿠바', capital: '아바나', continent: 'america', flag: '🇨🇺' },
{ code: 'jm', name: '자메이카', capital: '킹스턴', continent: 'america', flag: '🇯🇲' },
{ code: 'ht', name: '아이티', capital: '포르토프랭스', continent: 'america', flag: '🇭🇹' },
{ code: 'do', name: '도미니카공화국', capital: '산토도밍고', continent: 'america', flag: '🇩🇴' },
{ code: 'bs', name: '바하마', capital: '나소', continent: 'america', flag: '🇧🇸' },
{ code: 'bb', name: '바베이도스', capital: '브리지타운', continent: 'america', flag: '🇧🇧' },
{ code: 'tt', name: '트리니다드토바고', capital: '포트오브스페인', continent: 'america', flag: '🇹🇹' },
{ code: 'gd', name: '그레나다', capital: '세인트조지스', continent: 'america', flag: '🇬🇩' },
{ code: 'lc', name: '세인트루시아', capital: '카스트리스', continent: 'america', flag: '🇱🇨' },
{ code: 'vc', name: '세인트빈센트그레나딘', capital: '킹스타운', continent: 'america', flag: '🇻🇨' },
{ code: 'ag', name: '앤티가바부다', capital: '세인트존스', continent: 'america', flag: '🇦🇬' },
{ code: 'dm', name: '도미니카', capital: '로조', continent: 'america', flag: '🇩🇲' },
{ code: 'kn', name: '세인트키츠네비스', capital: '바스테르', continent: 'america', flag: '🇰🇳' },

// 남아메리카 (12개국)
{ code: 'br', name: '브라질', capital: '브라질리아', continent: 'america', flag: '🇧🇷' },
{ code: 'ar', name: '아르헨티나', capital: '부에노스아이레스', continent: 'america', flag: '🇦🇷' },
{ code: 'pe', name: '페루', capital: '리마', continent: 'america', flag: '🇵🇪' },
{ code: 'co', name: '콜롬비아', capital: '보고타', continent: 'america', flag: '🇨🇴' },
{ code: 'bo', name: '볼리비아', capital: '라파스', continent: 'america', flag: '🇧🇴' },
{ code: 'cl', name: '칠레', capital: '산티아고', continent: 'america', flag: '🇨🇱' },
{ code: 'ec', name: '에콰도르', capital: '키토', continent: 'america', flag: '🇪🇨' },
{ code: 've', name: '베네수엘라', capital: '카라카스', continent: 'america', flag: '🇻🇪' },
{ code: 'py', name: '파라과이', capital: '아순시온', continent: 'america', flag: '🇵🇾' },
{ code: 'uy', name: '우루과이', capital: '몬테비데오', continent: 'america', flag: '🇺🇾' },
{ code: 'gy', name: '가이아나', capital: '조지타운', continent: 'america', flag: '🇬🇾' },
{ code: 'sr', name: '수리남', capital: '파라마리보', continent: 'america', flag: '🇸🇷' },

// 오세아니아 (14개국)
{ code: 'au', name: '호주', capital: '캔버라', continent: 'oceania', flag: '🇦🇺' },
{ code: 'nz', name: '뉴질랜드', capital: '웰링턴', continent: 'oceania', flag: '🇳🇿' },
{ code: 'pg', name: '파푸아뉴기니', capital: '포트모르즈비', continent: 'oceania', flag: '🇵🇬' },
{ code: 'fj', name: '피지', capital: '수바', continent: 'oceania', flag: '🇫🇯' },
{ code: 'sb', name: '솔로몬제도', capital: '호니아라', continent: 'oceania', flag: '🇸🇧' },
{ code: 'nc', name: '뉴칼레도니아', capital: '누메아', continent: 'oceania', flag: '🇳🇨' },
{ code: 'vu', name: '바누아투', capital: '포트빌라', continent: 'oceania', flag: '🇻🇺' },
{ code: 'ws', name: '사모아', capital: '아피아', continent: 'oceania', flag: '🇼🇸' },
{ code: 'ki', name: '키리바시', capital: '타라와', continent: 'oceania', flag: '🇰🇮' },
{ code: 'to', name: '통가', capital: '누쿠알로파', continent: 'oceania', flag: '🇹🇴' },
{ code: 'fm', name: '미크로네시아', capital: '팔리키르', continent: 'oceania', flag: '🇫🇲' },
{ code: 'mh', name: '마셜제도', capital: '마주로', continent: 'oceania', flag: '🇲🇭' },
{ code: 'pw', name: '팔라우', capital: '음굴루드', continent: 'oceania', flag: '🇵🇼' },
{ code: 'nr', name: '나우루', capital: '야렌', continent: 'oceania', flag: '🇳🇷' }
```

];

// 국가 데이터 유틸리티 함수들
const CountryUtils = {
// 전체 국가 목록 반환
getAllCountries() {
return countries;
},

```
// 대륙별 국가 반환
getCountriesByContinent(continent) {
    return countries.filter(country => country.continent === continent);
},

// 랜덤 국가 선택
getRandomCountry() {
    return countries[Math.floor(Math.random() * countries.length)];
},

// 특정 국가 제외하고 랜덤 국가들 선택
getRandomCountries(count, excludeCountry = null) {
    let availableCountries = countries;
    if (excludeCountry) {
        availableCountries = countries.filter(country => 
            country.code !== excludeCountry.code && 
            country.name !== excludeCountry.name
        );
    }
    
    const shuffled = [...availableCountries].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
},

// 국가 코드로 국가 찾기
getCountryByCode(code) {
    return countries.find(country => country.code === code);
},

// 국가명으로 국가 찾기
getCountryByName(name) {
    return countries.find(country => country.name === name);
},

// 수도명으로 국가 찾기
getCountryByCapital(capital) {
    return countries.find(country => country.capital === capital);
},

// 국기 이미지 URL 생성
getFlagImageUrl(countryCode) {
    return `https://flagpedia.net/data/flags/w580/${countryCode}.webp`;
},

// 국가 총 개수
getTotalCount() {
    return countries.length;
},

// 대륙별 통계
getContinentStats() {
    const stats = {};
    countries.forEach(country => {
        stats[country.continent] = (stats[country.continent] || 0) + 1;
    });
    return stats;
}
```

};