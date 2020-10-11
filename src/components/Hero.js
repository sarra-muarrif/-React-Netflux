import React from 'react'

class Hero extends React.Component {
    render() {
        return (
            <section className='section hero featuredMovies has-bullets'>
                <div className='container'>
                    <div className='slide featured'>
                        <h2 className='featured-title'>Peaky Blinders</h2>
                        <p className='featured-overview'> مسلسل جريمة بريطاني من ابتكار ستيفن نايت، تم عرضه لأول مرة على قناة بي بي سي الثانية في 12 سبتمبر 2013. تقع أحداث المسلسل في برمنغهام في إنجلترا، ويُركز على عائلة شيلبي الإجرامية في أعقاب الحرب العالمية الأولى. مقتبس عن عصابة بيكي بلايندرز الحقيقة ولكن بأحداث خيالية، وهي عصابة من القرن التاسع عشر كانت ناشطة في المدينة منذ تسعينيات القرن التاسع عشر إلى أوائل القرن العشرين. يلعب كيليان مورفي دور تومي شيلبي، زعيم العصابة، مع هيلين ماكروري بدور عمة تومي إليزابيث "بولي" غراي وبول أندرسون كشقيقه الأكبر آرثر شيلبي، ثاني أكبر عضو في العصابة.</p>
                        <p className='buttons'>
                            <a  className='button is-primary'> شاهد الفلم</a>
                            <a  className='button'> اقراء المزيد</a>
                        </p>
                    </div>
                </div>
            </section>

        )
    }
}

export default Hero