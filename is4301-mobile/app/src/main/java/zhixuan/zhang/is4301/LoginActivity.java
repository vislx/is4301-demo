package zhixuan.zhang.is4301;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;

import com.bumptech.glide.Glide;

public class LoginActivity extends AppCompatActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        Button login_login_button = (Button) findViewById(R.id.login_login_button);
        login_login_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(LoginActivity.this,DashBoardActivity.class);
                startActivity(intent);
            }
        });

        ImageView login_company_logo = (ImageView) findViewById(R.id.login_company_logo);
        Glide.with(LoginActivity.this).load(R.drawable.logo_final).into(login_company_logo);
    }
}
