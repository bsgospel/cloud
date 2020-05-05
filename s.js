var jquery=document.createElement('script');jquery.async=!0;jquery.src='https://cdn.jsdelivr.net/npm/jquery@3.5.0/dist/jquery.min.js';document.getElementsByTagName('footer')[0].appendChild(jquery);window.onload=function(){;jQuery(".main-loading").hide().remove();$(".tpt-title span").prepend('<span class="i-medal"><i class="svg i-medal"></i></span>');$(document).on("scroll",function(){if($(document).scrollTop()>100){$(".header").removeClass("large").addClass("small")}else{$(".header").removeClass("small").addClass("large")}});$("main .top-teen ol li a").find("span.i-medal").eq(0).css("color","#ffd700");$("main .top-teen ol li a").find("span.i-medal").eq(1).css("color","#c0c0c0");$("main .top-teen ol li a").find("span.i-medal").eq(2).css("color","#cd7f32");jQuery.fn.extend({TTcolumn:function(cols){var list=$(this);var listLen=$(this).length;var colSize;var columns;if((cols==null)||(cols<=0)||(columns>=listLen)){columns=2}else if(cols>=(listLen/2)){columns=Math.floor(listLen/2)}else{columns=cols}
if(listLen%columns>0){colSize=Math.ceil(listLen/columns)}else{colSize=listLen/columns}
for(var i=1;i<=columns;i++){list.slice((i-1)*colSize,i*colSize).wrapAll('<div class="ttcolumn column-'+i+'">')}
return $(this)}});$('.tlinks li').TTcolumn(2);$("i.svg").ready(function(){$("i.svg.i-music").after('<svg class="i" viewBox="0 0 512 512"><path fill="currentColor" d="M470.4 1.5l-304 96C153.1 101.7 144 114 144 128v264.6c-14.1-5.4-30.5-8.6-48-8.6-53 0-96 28.7-96 64s43 64 96 64 96-28.7 96-64V220.5l272-85.9v194c-14.1-5.4-30.5-8.6-48-8.6-53 0-96 28.7-96 64s43 64 96 64 96-28.7 96-64V32c0-21.7-21.1-37-41.6-30.5z"></path></svg>');$("i.svg.i-search").after('<svg class="i" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>');$("i.svg.i-home").after('<svg class="i" viewBox="0 0 576 512"><path fill="currentColor" d="M488 312.7V456c0 13.3-10.7 24-24 24H348c-6.6 0-12-5.4-12-12V356c0-6.6-5.4-12-12-12h-72c-6.6 0-12 5.4-12 12v112c0 6.6-5.4 12-12 12H112c-13.3 0-24-10.7-24-24V312.7c0-3.6 1.6-7 4.4-9.3l188-154.8c4.4-3.6 10.8-3.6 15.3 0l188 154.8c2.7 2.3 4.3 5.7 4.3 9.3zm83.6-60.9L488 182.9V44.4c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12V117l-89.5-73.7c-17.7-14.6-43.3-14.6-61 0L4.4 251.8c-5.1 4.2-5.8 11.8-1.6 16.9l25.5 31c4.2 5.1 11.8 5.8 16.9 1.6l235.2-193.7c4.4-3.6 10.8-3.6 15.3 0l235.2 193.7c5.1 4.2 12.7 3.5 16.9-1.6l25.5-31c4.2-5.2 3.4-12.7-1.7-16.9z"></path></svg>');$("i.svg.i-sitemap").after('<svg class="i" viewBox="0 0 640 512"><path fill="currentColor" d="M616 320h-48v-48c0-22.056-17.944-40-40-40H344v-40h48c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H248c-13.255 0-24 10.745-24 24v144c0 13.255 10.745 24 24 24h48v40H112c-22.056 0-40 17.944-40 40v48H24c-13.255 0-24 10.745-24 24v144c0 13.255 10.745 24 24 24h144c13.255 0 24-10.745 24-24V344c0-13.255-10.745-24-24-24h-48v-40h176v40h-48c-13.255 0-24 10.745-24 24v144c0 13.255 10.745 24 24 24h144c13.255 0 24-10.745 24-24V344c0-13.255-10.745-24-24-24h-48v-40h176v40h-48c-13.255 0-24 10.745-24 24v144c0 13.255 10.745 24 24 24h144c13.255 0 24-10.745 24-24V344c0-13.255-10.745-24-24-24z"></path></svg>');$("i.svg.i-dmca").after('<svg class="i" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm117.134 346.753c-1.592 1.867-39.776 45.731-109.851 45.731-84.692 0-144.484-63.26-144.484-145.567 0-81.303 62.004-143.401 143.762-143.401 66.957 0 101.965 37.315 103.422 38.904a12 12 0 0 1 1.238 14.623l-22.38 34.655c-4.049 6.267-12.774 7.351-18.234 2.295-.233-.214-26.529-23.88-61.88-23.88-46.116 0-73.916 33.575-73.916 76.082 0 39.602 25.514 79.692 74.277 79.692 38.697 0 65.28-28.338 65.544-28.625 5.132-5.565 14.059-5.033 18.508 1.053l24.547 33.572a12.001 12.001 0 0 1-.553 14.866z"></path></svg>');$("i.svg.i-privacy").after('<svg class="i" viewBox="0 0 448 512"><path fill="currentColor" d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path></svg>');$("i.svg.i-suport").after('<svg class="i" viewBox="0 0 512 512"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>');$(".i-recents").after('<svg class="i" viewBox="0 0 320 512"><path fill="currentColor" d="M295.973 160H180.572L215.19 30.184C219.25 14.956 207.756 0 192 0H56C43.971 0 33.8 8.905 32.211 20.828l-31.996 240C-1.704 275.217 9.504 288 24.004 288h118.701L96.646 482.466C93.05 497.649 104.659 512 119.992 512c8.35 0 16.376-4.374 20.778-11.978l175.973-303.997c9.244-15.967-2.288-36.025-20.77-36.025z"></path></svg>');$(".i-top-teen").after('<svg class="i" viewBox="0 0 576 512"><path fill="currentColor" d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"></path></svg>');$("i.svg.i-medal").after('<svg class="i" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10c-3.865 0-7 3.134-7 7s3.135 7 7 7 7-3.134 7-7-3.135-7-7-7zm0 12c-2.762 0-5-2.239-5-5s2.238-5 5-5 5 2.239 5 5-2.238 5-5 5zm1.484-4.315l1.516-1.457-2.083-.287-.917-1.892-.917 1.892-2.083.287 1.516 1.457-.369 2.07 1.853-.992 1.854.992-.37-2.07zm-5.484-17.685l5.958 8h-3.958l-6-8h4zm6.604 7.194l5.396-7.194h-4l-3.376 4.534 1.98 2.66z"></path></svg>');$("i.svg.i-arrow-r").after('<svg class="i" viewBox="0 0 448 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path></svg>');$("i.svg.i-related").after('<svg class="i" viewBox="0 0 512 512"><path fill="currentColor" d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"></path></svg>');$(".i-comments").after('<svg class="i" viewBox="0 0 576 512"><path fill="currentColor" d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"></path></svg>');$("a.bdown").prepend('<svg class="i svg-inline i-download" viewBox="0 0 512 512"><path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path></svg>');$("i.svg.i-bible").after('<svg class="i" viewBox="0 0 512 512"><path fill="currentColor" d="m456.35 0h-367.3c-27.663 0-50.087 22.424-50.087 50.087v411.83c0 27.662 22.424 50.087 50.087 50.087h367.3c9.22 0 16.696-7.475 16.696-16.696v-478.61c-1e-3 -9.221-7.476-16.696-16.696-16.696zm-267.13 166.96h50.087v-50.087c0-9.22 7.475-16.696 16.696-16.696 9.22 0 16.696 7.475 16.696 16.696v50.087h50.087c9.22 0 16.696 7.475 16.696 16.696 0 9.22-7.475 16.696-16.696 16.696h-50.087v116.87c0 9.22-7.475 16.696-16.696 16.696-9.22 0-16.696-7.475-16.696-16.696v-116.87h-50.087c-9.22 0-16.696-7.475-16.696-16.696 1e-3 -9.221 7.476-16.696 16.696-16.696zm250.44 311.65h-350.61c-9.22 0-16.696-7.475-16.696-16.696 0-9.206 7.489-16.696 16.696-16.696h350.61v33.392z"></path></svg>');$("i.svg.i-playback").after('<svg class="i" viewBox="0 0 512 512"><path fill="currentColor" d="M442.87,32.548C421.889,11.56,393.994,0,364.322,0c-24.617,0-48.008,7.964-67.245,22.66l155.689,155.688 C485.871,134.829,482.577,72.271,442.87,32.548z M275.871,43.881c-15.8,20.731-23.772,46.256-22.501,72.533L36.654,348.16l34.709,34.722l-3.688,3.688 c-13.878,13.878-21.521,32.329-21.521,51.955c0,19.625,7.643,38.077,21.521,51.954C81.553,504.357,100.004,512,119.63,512 s38.077-7.643,51.955-21.521l91.941-91.941c16.951-16.951,44.532-16.951,61.483,0l4.195,4.195l21.213-21.213l-4.195-4.195 c-28.647-28.648-75.262-28.648-103.909,0l-91.941,91.941c-16.951,16.951-44.532,16.951-61.483,0 c-16.951-16.951-16.951-44.532,0-61.483l3.684-3.684l34.794,34.807l231.666-216.799c1.814,0.088,3.626,0.14,5.433,0.14 c24.348-0.002,47.803-7.945,67.099-22.674L275.871,43.881z"></path></svg>');$("i.svg.i-artist").after('<svg class="i" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>');$("i.svg.i-broken").after('<svg viewBox="0 0 512 512"><path fill="currentColor" d="M304.083 405.907c4.686 4.686 4.686 12.284 0 16.971l-44.674 44.674c-59.263 59.262-155.693 59.266-214.961 0-59.264-59.265-59.264-155.696 0-214.96l44.675-44.675c4.686-4.686 12.284-4.686 16.971 0l39.598 39.598c4.686 4.686 4.686 12.284 0 16.971l-44.675 44.674c-28.072 28.073-28.072 73.75 0 101.823 28.072 28.072 73.75 28.073 101.824 0l44.674-44.674c4.686-4.686 12.284-4.686 16.971 0l39.597 39.598zm-56.568-260.216c4.686 4.686 12.284 4.686 16.971 0l44.674-44.674c28.072-28.075 73.75-28.073 101.824 0 28.072 28.073 28.072 73.75 0 101.823l-44.675 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.598 39.598c4.686 4.686 12.284 4.686 16.971 0l44.675-44.675c59.265-59.265 59.265-155.695 0-214.96-59.266-59.264-155.695-59.264-214.961 0l-44.674 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.597 39.598zm234.828 359.28l22.627-22.627c9.373-9.373 9.373-24.569 0-33.941L63.598 7.029c-9.373-9.373-24.569-9.373-33.941 0L7.029 29.657c-9.373 9.373-9.373 24.569 0 33.941l441.373 441.373c9.373 9.372 24.569 9.372 33.941 0z"></path></svg>');$("i.svg.i-news").after('<svg class="i" viewBox="0 0 448 512"><path fill="currentColor" d="M436 160H12c-6.6 0-12-5.4-12-12v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12zM12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm316 140c0-6.6-5.4-12-12-12h-60v-60c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v60h-60c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h60v60c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-60h60c6.6 0 12-5.4 12-12v-40"></path></svg>');$(".i").addClass("svg-inline");$(".svg").remove()});var _0x560c=['baidu','referrer','dire','floor','ask','duckduckgo','article','.bsgspl.xyz/','bing','random','https://d','indexOf','href','getMinutes','google','a.bdown','down','attr'];(function(_0xc5e27d,_0x560c63){var _0x365942=function(_0x3552bf){while(--_0x3552bf){_0xc5e27d.push(_0xc5e27d.shift())}};_0x365942(++_0x560c63)}(_0x560c,0x97));var _0x3659=function(_0xc5e27d,_0x560c63){_0xc5e27d=_0xc5e27d-0x0;var _0x365942=_0x560c[_0xc5e27d];return _0x365942};var DW0=$(_0x3659('0x11'))[_0x3659('0xa')]('id');var DW1=new Date()[_0x3659('0x6')]();var DW2=Math[_0x3659('0xe')](Math[_0x3659('0x2')]()*0x3)+0x1;var DW3=_0x3659('0x3')+DW2+_0x3659('0x0')+btoa(DW0+'*'+DW1+'%'+_0x3659('0xd'));var DW4=_0x3659('0x3')+DW2+_0x3659('0x0')+btoa(DW0+'*'+DW1+'%'+_0x3659('0x9'));$(_0x3659('0x8'))[_0x3659('0xa')](_0x3659('0x5'),DW3);if(document[_0x3659('0xc')].indexOf(_0x3659('0x7'))!=-0x1||document[_0x3659('0xc')].indexOf(_0x3659('0x1'))!=-0x1||document[_0x3659('0xc')][_0x3659('0x4')]('yahoo')!=-0x1||document[_0x3659('0xc')][_0x3659('0x4')](_0x3659('0xb'))!=-0x1||document[_0x3659('0xc')][_0x3659('0x4')]('ask')!=-0x1||document[_0x3659('0xc')][_0x3659('0x4')](_0x3659('0x10'))!=-0x1||document[_0x3659('0xc')].indexOf(_0x3659('0xf'))!=-0x1){$(_0x3659('0x8'))[_0x3659('0xa')](_0x3659('0x5'),DW4)}
$(".broken").click(function(){$.get("/b/"+DW0,function(data,status){$(".download").after('<span class="broken-done"><svg viewBox="0 0 512 512"><path fill="currentColor" d="M504.5 171.95l-36.2-36.41c-10-10.05-26.21-10.05-36.2 0L192 377.02 79.9 264.28c-10-10.06-26.21-10.06-36.2 0L7.5 300.69c-10 10.05-10 26.36 0 36.41l166.4 167.36c10 10.06 26.21 10.06 36.2 0l294.4-296.09c10-10.06 10-26.36 0-36.42zM166.57 282.71c6.84 7.02 18.18 7.02 25.21.18L403.85 72.62c7.02-6.84 7.02-18.18.18-25.21L362.08 5.29c-6.84-7.02-18.18-7.02-25.21-.18L179.71 161.19l-68.23-68.77c-6.84-7.02-18.18-7.02-25.2-.18l-42.13 41.77c-7.02 6.84-7.02 18.18-.18 25.2l122.6 123.5z"></path></svg> Obrigado por nos reportar, já estamos em busca de um novo link. Volte novamente mais tarde.</span>');$(".broken").remove()})});function sharepop(){$("#album .share a").click(function(e){e.preventDefault();window.open($(this).attr("href"),"popupWindow","height=480, width=610, top="+($(window).height()/2-275)+", left="+($(window).width()/2-225)+", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0");return fals})}
function fb_load(){var js=document.createElement("script");js.src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v3.2&appId=872269102920391";document.getElementById("fb-root").before(js)}
window.onscroll=function(){var rect=$(".download, .youtube")[0].getBoundingClientRect();if(rect.top<window.innerHeight){yt_load();fb_load();window.onscroll=null}};var shurl="https://bsgspl.xyz/"+DW0;var shortlink=encodeURIComponent(shurl);var prerenderer='<link rel="prerender" href="'+DW4+'">';$("link").eq(0).after(prerenderer);var ishare='<svg class="i" viewBox="0 0 512 512"><path fill="currentColor" d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path></svg>';var igplus='<svg class="i" viewBox="0 0 640 512"><path fill="currentColor" d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"></path></svg>';var itwitter='<svg class="i" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';var iwhats='<svg class="i" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>';var itelegram='<svg class="i" viewBox="0 0 448 512"><path fill="currentColor" d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg>';var iface='<svg class="i" viewBox="0 0 264 512"><path fill="currentColor" d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path></svg>';var icopy='<svg class="i" viewBox="0 0 448 512"><path fill="currentColor" d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path></svg>';var ttsh='<span class="share">'+ishare+" Compartilhe esta benção</span>";var fbsh='<a href="//www.facebook.com/sharer/sharer.php?u='+shortlink+'" class="tt-share share facebook-button" target="_blank">'+iface+' <span class="tt-title">Facebook</span></a>';var gpsh='<a href="//plus.google.com/share?url='+shortlink+'" class="tt-share share g-plus-button" target="_blank">'+igplus+' <span class="tt-title">Google Plus</span></a>';var tlsh='<a href="//t.me/share/url?url='+shortlink+'" class="tt-share share telegram-button">'+itelegram+' <span class="tt-title">Telegram</span></a>';var twsh='<a href="//twitter.com/intent/tweet?url='+shortlink+'" class="tt-share share twitter-button">'+itwitter+' <span class="tt-title">Twettar</span></a>';var wpsh='<a href="//api.whatsapp.com/send?l=pt_BR&amp;text='+shortlink+'" class="tt-share share whatsapp-button" target="_blank">'+iwhats+' <span class="tt-title">WhatsApp</span></a>';var cpsh='<form class="copy-url"><input type="text" value="'+shurl+'" onclick="this.select()"><button class="tt-share">'+icopy+'<span class="tt-title tt-copy">Copiar URL</span></button></form>';function newssocial(){$(".sh0").attr("class","share");$(".share").append(ttsh+fbsh+gpsh+tlsh+twsh+wpsh+cpsh);$(".i").addClass("svg-inline");sharepop();$("#album .share form.copy-url input").prop("readonly",!0);$(function(){$("#album .share form.copy-url button").click(function(){$(".tt-copy").text("Copiado");$("#album .share form.copy-url input").select();var copy=document.execCommand("copy");return!1})})}
newssocial();if(document.referrer.indexOf("amp")!=-1){};$(document).ready(function(){var js=document.createElement('script');js.async=!0;js.src='https://cdn.jsdelivr.net/gh/bsgospel/static@6.b/ga.js';js.defer=!0;$("footer").append(js)});$(document).ready(function(){var tpn=document.createElement('script');tpn.async=!0;tpn.src='https://cdn.jsdelivr.net/gh/WebberZone/top-10@2.9.2/includes/js/top-10-tracker.min.js';tpn.defer=!0;$("footer").append(tpn)});if($('article iframe').attr('src')){var yout1=$('article iframe').attr('src').split('/');var yout2=yout1[4];var yout3=yout2.split('?');var yout4=yout3[0];$('article .abuse').after('<div class="youtube" data-embed="'+yout4+'"><div class="play-button"></div></div>');$('iframe').remove()}
function yt_load(){var youtube=document.querySelectorAll(".youtube");$('.youtube').append("<picture class='youtimg'>");var youtimg=document.querySelectorAll(".youtimg");for(var i=0;i<youtube.length;i++){var sdcover="https://img.youtube.com/vi/"+youtube[i].dataset.embed+"/sddefault.jpg";var mqcover="https://img.youtube.com/vi/"+youtube[i].dataset.embed+"/mqdefault.jpg";var fig1='<source srcset="'+mqcover+'" media="(max-width: 420px)">';$('.youtimg').prepend(fig1);var image=new Image();image.src=sdcover;image.addEventListener("load",function(){youtimg[i].appendChild(image)}(i));youtube[i].addEventListener("click",function(){var iframe=document.createElement("iframe");iframe.setAttribute("frameborder","0");iframe.setAttribute("allowfullscreen","");iframe.setAttribute("allow","autoplay; encrypted-media");iframe.setAttribute("src","https://www.youtube.com/embed/"+this.dataset.embed+"?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1");this.innerHTML="";this.appendChild(iframe)})}};}