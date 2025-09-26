import json

with open('/Users/sun2022/pro/1_pro_websit/22_2025_project/2_4_game_he_zi_project/static/js/games_data_for_page.json', 'r', encoding='utf-8') as f:
    games = json.load(f)

for item in games:
    item['show_comments'] = False
    item['show_faq'] = False

with open('/Users/sun2022/pro/1_pro_websit/22_2025_project/2_4_game_he_zi_project/static/js/games_data_for_page.json', 'w', encoding='utf-8') as f:
    json.dump(games, f, ensure_ascii=False, indent=2)

print("已为每个item添加 show_comments 和 show_faq 字段，且都为 false。")