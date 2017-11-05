package zhixuan.zhang.is4301;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.ImageView;

import com.bumptech.glide.Glide;

public class SettingActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_setting);

        ImageView setting_profile_image = (ImageView) findViewById(R.id.setting_profile_image);
        Glide.with(SettingActivity.this).load(R.drawable.u1).centerCrop().into(setting_profile_image);
    }
}
