# Generated by Django 4.0.3 on 2022-04-07 05:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Labratory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('labratory_name', models.CharField(max_length=32)),
            ],
        ),
        migrations.CreateModel(
            name='tag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=32)),
                ('mail', models.EmailField(max_length=254)),
                ('field', models.CharField(choices=[('0', '---'), ('1', 'ビジョン'), ('2', 'AI'), ('3', 'ロボティクス'), ('4', 'Web')], default='0', max_length=8)),
                ('x', models.FloatField()),
                ('y', models.FloatField()),
                ('field2', models.CharField(choices=[('0', '---'), ('1', '管理者'), ('2', 'メンバー')], default='0', max_length=8)),
            ],
        ),
        migrations.CreateModel(
            name='Schedule',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('exit', models.DateTimeField(auto_created=True)),
                ('enter', models.DateTimeField(auto_created=True)),
                ('labid', models.ManyToManyField(to='tsunagaritai.labratory', verbose_name='研究室ID')),
                ('userid', models.ManyToManyField(to='tsunagaritai.user', verbose_name='ユーザID')),
            ],
        ),
        migrations.CreateModel(
            name='Log',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('exit', models.DateTimeField(auto_created=True)),
                ('enter', models.DateTimeField(auto_created=True)),
                ('lab', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='labratory', to='tsunagaritai.labratory')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='users', to='tsunagaritai.user')),
            ],
        ),
        migrations.AddField(
            model_name='labratory',
            name='member',
            field=models.ManyToManyField(to='tsunagaritai.user', verbose_name='所属メンバー'),
        ),
    ]
