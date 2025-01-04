"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[720],{52149:function(e,a,t){function n(e,a){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);return e}t.d(a,{Z:function(){return n}})},49474:function(e,a,t){t.d(a,{Z:function(){return i}});var n=t(19013),r=t(13882);function i(e,a){(0,r.Z)(2,arguments);var t=(0,n.Z)(e),i=(0,n.Z)(a),o=t.getTime()-i.getTime();return o<0?-1:o>0?1:o}},84129:function(e,a,t){t.r(a),t.d(a,{default:function(){return i}});var n=t(19013),r=t(13882);function i(e,a){(0,r.Z)(2,arguments);var t=(0,n.Z)(e),i=(0,n.Z)(a),o=t.getFullYear()-i.getFullYear(),d=t.getMonth()-i.getMonth();return 12*o+d}},83894:function(e,a,t){t.r(a),t.d(a,{default:function(){return i}});var n=t(19013),r=t(13882);function i(e){(0,r.Z)(1,arguments);var a=(0,n.Z)(e);return a.setHours(23,59,59,999),a}},4135:function(e,a,t){t.r(a),t.d(a,{default:function(){return i}});var n=t(19013),r=t(13882);function i(e){(0,r.Z)(1,arguments);var a=(0,n.Z)(e),t=a.getMonth();return a.setFullYear(a.getFullYear(),t+1,0),a.setHours(23,59,59,999),a}},77933:function(e,a,t){t.d(a,{Z:function(){return y}});var n=t(84314),r=t(49474),i=t(19013),o=t(84129),d=t(13882),s=t(83894),u=t(4135);function m(e){(0,d.Z)(1,arguments);var a=(0,i.Z)(e);return(0,s.default)(a).getTime()===(0,u.default)(a).getTime()}function f(e,a){(0,d.Z)(2,arguments);var t,n=(0,i.Z)(e),s=(0,i.Z)(a),u=(0,r.Z)(n,s),f=Math.abs((0,o.default)(n,s));if(f<1)t=0;else{1===n.getMonth()&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-u*f);var c=(0,r.Z)(n,s)===-u;m((0,i.Z)(e))&&1===f&&1===(0,r.Z)(e,s)&&(c=!1),t=u*(f-Number(c))}return 0===t?0:t}var c=t(59910),h=t(93645);function l(e,a,t){(0,d.Z)(2,arguments);var n=(0,c.Z)(e,a)/1e3;return(0,h.u)(null===t||void 0===t?void 0:t.roundingMethod)(n)}var v=t(44941),g=t(52149);function b(e){return(0,g.Z)({},e)}var Z=t(24262),M=1440,p=43200;function w(e,a,t){var o,s;(0,d.Z)(2,arguments);var u=(0,n.j)(),m=null!==(o=null!==(s=null===t||void 0===t?void 0:t.locale)&&void 0!==s?s:u.locale)&&void 0!==o?o:v.Z;if(!m.formatDistance)throw new RangeError("locale must contain formatDistance property");var c=(0,r.Z)(e,a);if(isNaN(c))throw new RangeError("Invalid time value");var h,w,y=(0,g.Z)(b(t),{addSuffix:Boolean(null===t||void 0===t?void 0:t.addSuffix),comparison:c});c>0?(h=(0,i.Z)(a),w=(0,i.Z)(e)):(h=(0,i.Z)(e),w=(0,i.Z)(a));var D,j=l(w,h),W=((0,Z.Z)(w)-(0,Z.Z)(h))/1e3,x=Math.round((j-W)/60);if(x<2)return null!==t&&void 0!==t&&t.includeSeconds?j<5?m.formatDistance("lessThanXSeconds",5,y):j<10?m.formatDistance("lessThanXSeconds",10,y):j<20?m.formatDistance("lessThanXSeconds",20,y):j<40?m.formatDistance("halfAMinute",0,y):j<60?m.formatDistance("lessThanXMinutes",1,y):m.formatDistance("xMinutes",1,y):0===x?m.formatDistance("lessThanXMinutes",1,y):m.formatDistance("xMinutes",x,y);if(x<45)return m.formatDistance("xMinutes",x,y);if(x<90)return m.formatDistance("aboutXHours",1,y);if(x<M){var P=Math.round(x/60);return m.formatDistance("aboutXHours",P,y)}if(x<2520)return m.formatDistance("xDays",1,y);if(x<p){var T=Math.round(x/M);return m.formatDistance("xDays",T,y)}if(x<86400)return D=Math.round(x/p),m.formatDistance("aboutXMonths",D,y);if((D=f(w,h))<12){var X=Math.round(x/p);return m.formatDistance("xMonths",X,y)}var q=D%12,k=Math.floor(D/12);return q<3?m.formatDistance("aboutXYears",k,y):q<9?m.formatDistance("overXYears",k,y):m.formatDistance("almostXYears",k+1,y)}function y(e,a){return(0,d.Z)(1,arguments),w(e,Date.now(),a)}},29081:function(e,a,t){t.d(a,{Z:function(){return c}});var n={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"cerca de 1 hora",other:"cerca de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"cerca de 1 semana",other:"cerca de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"cerca de 1 m\xeas",other:"cerca de {{count}} meses"},xMonths:{one:"1 m\xeas",other:"{{count}} meses"},aboutXYears:{one:"cerca de 1 ano",other:"cerca de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}},r=function(e,a,t){var r,i=n[e];return r="string"===typeof i?i:1===a?i.one:i.other.replace("{{count}}",String(a)),null!==t&&void 0!==t&&t.addSuffix?t.comparison&&t.comparison>0?"em "+r:"h\xe1 "+r:r},i=t(49526),o={date:(0,i.Z)({formats:{full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,i.Z)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.Z)({formats:{full:"{{date}} '\xe0s' {{time}}",long:"{{date}} '\xe0s' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},d={lastWeek:function(e){var a=e.getUTCDay();return"'"+(0===a||6===a?"\xfaltimo":"\xfaltima")+"' eeee '\xe0s' p"},yesterday:"'ontem \xe0s' p",today:"'hoje \xe0s' p",tomorrow:"'amanh\xe3 \xe0s' p",nextWeek:"eeee '\xe0s' p",other:"P"},s=function(e,a,t,n){var r=d[e];return"function"===typeof r?r(a):r},u=t(88486),m={ordinalNumber:function(e,a){var t=Number(e);return"week"===(null===a||void 0===a?void 0:a.unit)?t+"\xaa":t+"\xba"},era:(0,u.Z)({values:{narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","depois de cristo"]},defaultWidth:"wide"}),quarter:(0,u.Z)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1\xba trimestre","2\xba trimestre","3\xba trimestre","4\xba trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,u.Z)({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},defaultWidth:"wide"}),day:(0,u.Z)({values:{narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sab"],abbreviated:["domingo","segunda","ter\xe7a","quarta","quinta","sexta","s\xe1bado"],wide:["domingo","segunda-feira","ter\xe7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xe1bado"]},defaultWidth:"wide"}),dayPeriod:(0,u.Z)({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"manh\xe3",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"tarde",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"tarde",night:"noite"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da manh\xe3",afternoon:"da tarde",evening:"da tarde",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da tarde",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da tarde",night:"da noite"}},defaultFormattingWidth:"wide"})},f=t(76723),c={code:"pt-BR",formatDistance:r,formatLong:o,formatRelative:s,localize:m,match:{ordinalNumber:(0,t(60974).Z)({matchPattern:/^(\d+)[\xba\xaao]?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,f.Z)({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|d\.?\s?c\.?)/i,wide:/^(antes de cristo|depois de cristo)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^antes de cristo/i,/^depois de cristo/i]},defaultParseWidth:"any"}),quarter:(0,f.Z)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](\xba)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,f.Z)({matchPatterns:{narrow:/^[jfmajsond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|mar\xe7o|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^fev/i,/^mar/i,/^abr/i,/^mai/i,/^jun/i,/^jul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dez/i]},defaultParseWidth:"any"}),day:(0,f.Z)({matchPatterns:{narrow:/^(dom|[23456]\xaa?|s[a\xe1]b)/i,short:/^(dom|[23456]\xaa?|s[a\xe1]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[a\xe1]b)/i,wide:/^(domingo|(segunda|ter[c\xe7]a|quarta|quinta|sexta)([- ]feira)?|s[a\xe1]bado)/i},defaultMatchWidth:"wide",parsePatterns:{short:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[a\xe1]/i],narrow:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[a\xe1]/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[a\xe1]b/i]},defaultParseWidth:"any"}),dayPeriod:(0,f.Z)({matchPatterns:{narrow:/^(a|p|mn|md|(da) (manh\xe3|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manh\xe3|tarde|noite))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn|^meia[-\s]noite/i,noon:/^md|^meio[-\s]dia/i,morning:/manh\xe3/i,afternoon:/tarde/i,evening:/tarde/i,night:/noite/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}}}}]);