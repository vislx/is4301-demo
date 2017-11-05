package zhixuan.zhang.is4301;

import android.content.Context;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.text.Editable;
import android.text.TextWatcher;
import android.util.DisplayMetrics;
import android.util.TypedValue;
import android.view.KeyEvent;
import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.widget.EditText;
import android.widget.RelativeLayout;

public class ChatActivity extends AppCompatActivity {

    RelativeLayout chat_chat_r1;
    RelativeLayout chat_chat_r2;
    RelativeLayout chat_chat_r3;
    RelativeLayout chat_chat_r4;
    RelativeLayout chat_chat_r5;
    EditText chat_text_input;
    View chat_voice_icon;
    View chat_smile_icon;
    View chat_send_icon;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_chat);
        chat_chat_r1 = (RelativeLayout) findViewById(R.id.chat_chat_r1);
        chat_chat_r2 = (RelativeLayout) findViewById(R.id.chat_chat_r2);
        chat_chat_r3 = (RelativeLayout) findViewById(R.id.chat_chat_r3);
        chat_chat_r4 = (RelativeLayout) findViewById(R.id.chat_chat_r4);
        chat_chat_r5 = (RelativeLayout) findViewById(R.id.chat_chat_r5);

        chat_chat_r1.setVisibility(View.VISIBLE);

        chat_voice_icon = findViewById(R.id.chat_voice_icon);
        chat_smile_icon = findViewById(R.id.chat_smile_icon);
        chat_send_icon = findViewById(R.id.chat_send_icon);
        chat_text_input = (EditText) findViewById(R.id.chat_text_input);
        chat_text_input.setOnKeyListener(new View.OnKeyListener() {
            @Override
            public boolean onKey(View v, int keyCode, KeyEvent event) {
                if ((keyCode == KeyEvent.KEYCODE_ENTER)) {
                    String text = chat_text_input.getText().toString().trim();
                    if (text.equalsIgnoreCase("Can help me check my account balance?")) {
                        chat_chat_r2.setVisibility(View.VISIBLE);
                        chat_chat_r3.setVisibility(View.VISIBLE);
                    } else if (text.equalsIgnoreCase("okay, thank you")) {
                        chat_chat_r4.setVisibility(View.VISIBLE);
                        chat_chat_r5.setVisibility(View.VISIBLE);
                    }
                    View view = ChatActivity.this.getCurrentFocus();
                    InputMethodManager imm = (InputMethodManager) getSystemService(Context.INPUT_METHOD_SERVICE);
                    imm.hideSoftInputFromWindow(view.getWindowToken(), 0);
                    chat_text_input.setText("");
                    return true;
                } else {
                    return false;
                }
            }
        });
        chat_text_input.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {

            }

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                String text = s.toString();
                if (!text.trim().isEmpty()) {
                    chat_voice_icon.setVisibility(View.INVISIBLE);
                    chat_smile_icon.setVisibility(View.INVISIBLE);
                    chat_send_icon.setVisibility(View.VISIBLE);

                } else {
                    chat_voice_icon.setVisibility(View.VISIBLE);
                    chat_smile_icon.setVisibility(View.VISIBLE);
                    chat_send_icon.setVisibility(View.INVISIBLE);
                }
            }

            @Override
            public void afterTextChanged(Editable s) {

            }
        });

    }
    private int convertDpToPx(int dp, DisplayMetrics displayMetrics) {
        float pixels = TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, dp, displayMetrics);
        return Math.round(pixels);
    }
}
