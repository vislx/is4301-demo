package zhixuan.zhang.is4301;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.webkit.WebView;

public class TestActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_test);
        WebView webView = (WebView) findViewById(R.id.web_view_test);
        webView.loadUrl("http://beta.html5test.com/");
    }
}
