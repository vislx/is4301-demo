package zhixuan.zhang.is4301;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.support.v4.view.PagerAdapter;
import android.support.v7.app.AppCompatActivity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import com.bumptech.glide.Glide;

import java.util.Timer;
import java.util.TimerTask;

import me.relex.circleindicator.CircleIndicator;
import zhixuan.zhang.is4301.helper.LoopViewPager;

public class NewsActivity extends AppCompatActivity {

    private LoopViewPager viewpager;
    private Handler handler;
    private Runnable update;
    private int currentPage;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_news);


        viewpager = (LoopViewPager) findViewById(R.id.news_view_pager);
        CircleIndicator indicator = (CircleIndicator) findViewById(R.id.news_view_pager_indicators);

        viewpager.setAdapter(new SamplePagerAdapter(getApplicationContext()));
        indicator.setViewPager(viewpager);
        handler = new Handler();

        update = new Runnable() {
            public void run() {
                if (currentPage == 5) {
                    currentPage = 0;
                }
                viewpager.setCurrentItem(currentPage++, true);
            }
        };
        new Timer().schedule(new TimerTask() {
            @Override
            public void run() {
                handler.post(update);
            }
        }, 100, 5000);

        ImageView card_background1 = (ImageView) findViewById(R.id.card_background1);
        Glide.with(NewsActivity.this).load(R.drawable.news11).into(card_background1);
        ImageView card_background2 = (ImageView) findViewById(R.id.card_background2);
        Glide.with(NewsActivity.this).load(R.drawable.news12).into(card_background2);
        ImageView card_background3 = (ImageView) findViewById(R.id.card_background3);
        Glide.with(NewsActivity.this).load(R.drawable.news13).into(card_background3);

        ImageView card_background11 = (ImageView) findViewById(R.id.card_background11);
        Glide.with(NewsActivity.this).load(R.drawable.news21).into(card_background11);
        ImageView card_background22 = (ImageView) findViewById(R.id.card_background22);
        Glide.with(NewsActivity.this).load(R.drawable.news22).into(card_background22);
        ImageView card_background33 = (ImageView) findViewById(R.id.card_background33);
        Glide.with(NewsActivity.this).load(R.drawable.news23).into(card_background33);

        card_background1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openWeb();
            }
        });
        card_background2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openWeb();
            }
        });
        card_background3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openWeb();
            }
        });
        card_background11.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openWeb();
            }
        });
        card_background22.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openWeb();
            }
        });
        card_background33.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openWeb();
            }
        });

    }

    private void openWeb() {
        Intent myWebLink = new Intent(android.content.Intent.ACTION_VIEW);
        myWebLink.setData(Uri.parse("https://www.ft.com/content/f371a3c0-b00b-11e7-beba-5521c713abf4"));
        startActivity(myWebLink);
    }

    public class SamplePagerAdapter extends PagerAdapter {
        private Context mContext;
        private LayoutInflater mLayoutInflater;
        private int mSize;

        public SamplePagerAdapter(Context mContext) {
            this.mContext = mContext;
            mSize = 5;
            mLayoutInflater = (LayoutInflater) mContext.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        }

        @Override
        public int getCount() {
            return mSize;
        }

        @Override
        public boolean isViewFromObject(View view, Object object) {
            return view == object;
        }

        @Override
        public void destroyItem(ViewGroup view, int position, Object object) {
            view.removeView((View) object);
        }

        @Override
        public Object instantiateItem(ViewGroup container, int position) {
            View itemView = mLayoutInflater.inflate(R.layout.news_slider, container, false);
            ImageView news_background = (ImageView) itemView.findViewById(R.id.news_background);
            TextView login_text_title = (TextView) itemView.findViewById(R.id.news_text);
            if (position == 0) {
                Glide.with(NewsActivity.this).load(R.drawable.news1).into(news_background);
                login_text_title.setText("Catalan president set to reveal independence plans");
            } else if (position == 1) {
                Glide.with(NewsActivity.this).load(R.drawable.news2).into(news_background);
                login_text_title.setText("Honeywell to split off two business units");
            } else if (position == 2) {
                Glide.with(NewsActivity.this).load(R.drawable.news3).into(news_background);
                login_text_title.setText("Paris and Berlin at odds over eurozone reform plans");
            } else if (position == 3) {
                Glide.with(NewsActivity.this).load(R.drawable.news4).into(news_background);
                login_text_title.setText("Koike leaves opposition without candidate for PM");
            } else if (position == 4) {
                Glide.with(NewsActivity.this).load(R.drawable.news5).into(news_background);
                login_text_title.setText("McKinsey seeks to defend fees in Eskom case");
            }
            container.addView(itemView);
            return itemView;
        }

        public void addItem() {
            mSize++;
            notifyDataSetChanged();
        }

        public void removeItem() {
            mSize--;
            mSize = mSize < 0 ? 0 : mSize;

            notifyDataSetChanged();
        }
    }

}





