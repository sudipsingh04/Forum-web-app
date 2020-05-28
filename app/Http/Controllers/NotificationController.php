<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\NotificationResource;

class NotificationController extends Controller
{
    public function __construct()
    {
        $this->middleware('JWT');
    }

    public function index()
    {
        return [
            'read'  => NotificationResource::collection(auth()->user()->notifications->where('read_at', '!=' , null)),
            'unread'  => NotificationResource::collection(auth()->user()->unreadNotifications)
        ];
    }

    public function markAsRead(Request $request)
    {
        auth()->user()->notifications->where('id', $request->id)->markAsRead();
    }
}
