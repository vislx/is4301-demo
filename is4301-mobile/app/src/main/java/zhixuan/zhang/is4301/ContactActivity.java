package zhixuan.zhang.is4301;

import android.content.DialogInterface;
import android.os.Bundle;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Toast;

import com.bumptech.glide.Glide;

public class ContactActivity extends AppCompatActivity {
    EditText contact_message;
    EditText contact_email_et;
    EditText contact_name_et;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_contact);

        ImageView contact_map = (ImageView) findViewById(R.id.contact_map);
        Glide.with(ContactActivity.this).load(R.drawable.contact_maps).centerCrop().into(contact_map);

        Button contact_button_send = (Button) findViewById(R.id.contact_button_send);
        contact_button_send.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                contact_message = (EditText) findViewById(R.id.contact_message);
                contact_email_et = (EditText) findViewById(R.id.contact_email_et);
                contact_name_et = (EditText) findViewById(R.id.contact_name_et);
                if (contact_message.getText().toString().isEmpty() && contact_email_et.getText().toString().isEmpty() && contact_name_et.getText().toString().isEmpty()) {
                    Toast.makeText(ContactActivity.this, "Please fill in all the fields", Toast.LENGTH_SHORT).show();
                } else if (contact_email_et.getText().toString().isEmpty()) {
                    Toast.makeText(ContactActivity.this, "Please fill in the Email", Toast.LENGTH_SHORT).show();
                } else if (contact_message.getText().toString().isEmpty()) {
                    Toast.makeText(ContactActivity.this, "Please fill in the message", Toast.LENGTH_SHORT).show();
                } else if (contact_name_et.getText().toString().isEmpty()) {
                    Toast.makeText(ContactActivity.this, "Please fill in your name", Toast.LENGTH_SHORT).show();
                } else if (!contact_message.getText().toString().isEmpty() && !contact_email_et.getText().toString().isEmpty() && !contact_name_et.getText().toString().isEmpty()) {
                    AlertDialog.Builder builder = new AlertDialog.Builder(ContactActivity.this);
                    builder.setTitle("Your message has been sent!")
                            .setPositiveButton("OK", new DialogInterface.OnClickListener() {
                                public void onClick(DialogInterface dialog, int id) {
                                    contact_message.setText("");
                                    contact_email_et.setText("");
                                    contact_name_et.setText("");
                                }
                            });
                    AlertDialog alert = builder.create();
                    alert.show();
                }
            }
        });
    }
}
